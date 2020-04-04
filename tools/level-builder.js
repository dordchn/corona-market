// Node tool created in order to simplify level designs (Created especially for level 4).

const fs = require('fs');
const util = require('util');
const readFile = util.promisify(fs.readFile);

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
      removeRowBlock(mat, block);
    }
  });
  return blocks;
}

function removeRowBlock(mat, block) {
  mat[block.row] = mat[block.row].substring(0, block.col)
        + ' '.repeat(block.width)
        + mat[block.row].substring(block.col + block.width); 
}

async function main() {
  const levelPath = process.argv[2];
  let levelMap = await readLvlFile(levelPath);
  const mapWidth = levelMap[0].length;
  const mapHeight = levelMap.length;
  const blocks = [];

  console.log('input:', levelMap);

  // Choose columns
  const levelMapT = transpose(levelMap);
  const transposedBlocks = collectXsRows(levelMapT, 2);
  blocks.push(...transposedBlocks.map(block => {
    return { row: block.col, col: block.row, width: block.height, height: block.width }
  }));

  // Choose rows
  levelMap = transpose(levelMapT);
  blocks.push(...collectXsRows(levelMap, 1));

  // Print blocks
  console.log(
    blocks.map(block => {
      const x = block.col ? HORIZONTAL_MARGINS + block.col * CELL_SIZE : 0;
      const y = block.row ? VERTICAL_MARGINS + block.row * CELL_SIZE : 0;
      let w = CELL_SIZE * block.width;
      if (block.col == 0) w += HORIZONTAL_MARGINS;
      if (block.col + block.width == mapWidth) w += HORIZONTAL_MARGINS;
      let h = CELL_SIZE * block.height;
      if (block.row == 0) h += VERTICAL_MARGINS;
      if (block.row + block.row == mapHeight) h += VERTICAL_MARGINS;
      return `new Obstacle(${x}, ${y}, ${w}, ${h}),`;
    }).join('\n'));
}

main();