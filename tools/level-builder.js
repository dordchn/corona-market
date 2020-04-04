// Node tool created in order to simplify level designs (Created especially for level 4).
// Note: This tool is pretty hack for now, needs improvement (mostly performance-wise)

const fs = require('fs');
const util = require('util');
const readFile = util.promisify(fs.readFile);

const MAP_WIDTH = 23;
const MAP_HEIGHT = 13;
const VERTICAL_MARGINS = 2;
const HORIZONTAL_MARGINS = 6;
const CELL_SIZE = 44;

async function readLvlFile(path) {
  try {
    const text = await readFile(path, 'utf8');
    return text.replace(/[\+\-\|]/g, '').split('\n').filter(f => f.length);

  } catch (err) {
    console.log('Error', err);
    process.exit(1);
  }
}

function transpose(mat) {
  const transposed = [];
  for (let col = 0; col < mat[0].length; col++) {
    transposed[col] = mat.map(row => row[col]).join('');
  }
  return transposed;
}

/**
 * Finds horizontal rows of Xs, and returns a list of blocks describing them.
 */
function collectXsRows(mat, minLength) {
  const blocks = [];
  mat.forEach((row, i) => {
    const r = /X+/g;
    let match;
    while (match = r.exec(row)) {
      // console.log(match);
      if (match[0].length < minLength) continue;

      const block = { row: i, col: match.index, width: match[0].length, height: 1 };
      blocks.push(block);
    }
  });
  return blocks;
}

function removeBlock(mat, block) {
  for (let i = block.row; i < block.row + block.height; i++) {
    mat[i] = mat[i].substring(0, block.col)
      + ' '.repeat(block.width)
      + mat[i].substring(block.col + block.width);
  }
}

function blockToCode(block) {
  const x = block.col ? HORIZONTAL_MARGINS + block.col * CELL_SIZE : 0;
  const y = block.row ? VERTICAL_MARGINS + block.row * CELL_SIZE : 0;
  let w = CELL_SIZE * block.width;
  if (block.col == 0) w += HORIZONTAL_MARGINS;
  if (block.col + block.width == MAP_WIDTH) w += HORIZONTAL_MARGINS;
  let h = CELL_SIZE * block.height;
  if (block.row == 0) h += VERTICAL_MARGINS;
  if (block.row + block.row == MAP_HEIGHT) h += VERTICAL_MARGINS;
  return `new Obstacle(${x}, ${y}, ${w}, ${h}),`;
}

async function main() {
  const levelPath = process.argv[2];
  let levelMap = await readLvlFile(levelPath);

  console.log('input:', levelMap);

  const findBlocks = mat => {
    const transposedMat = transpose(mat);
    const rowBlocks = collectXsRows(mat, 1);
    const colBlocks = collectXsRows(transposedMat, 2).map(block => {
      return { row: block.col, col: block.row, width: block.height, height: block.width }
    });
    return [...rowBlocks, ...colBlocks];
  }

  // Sort blocks by area, break equality by height
  const sortBlocks = blocks => blocks.sort((b1, b2) => {
    const areaDiff = b2.width * b2.height - b1.width * b1.height;
    return areaDiff > 0 ? 1 : (areaDiff == 0 && b2.height > b1.height) ? 1 : -1;
  });

  const finalBlocks = [];
  let blocks = sortBlocks(findBlocks(levelMap));
  while (blocks.length > 0) {
    finalBlocks.push(blocks[0]);
    removeBlock(levelMap, blocks[0]);
    blocks = sortBlocks(findBlocks(levelMap)); // TODO: Should be done only if the new top block is missing Xs
    // console.log(blocks);
  }

  // Print blocks
  console.log(finalBlocks.map(blockToCode).join('\n'));
}

main();