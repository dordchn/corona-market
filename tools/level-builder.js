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
    return text.replace(/[\ \|]/g, '').split('\n').filter(l => l[0] != '+').filter(f => f.length);

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
      + '-'.repeat(block.width)
      + mat[i].substring(block.col + block.width);
  }
}

function posToCoord(row, col) {
  return {
    x: col ? HORIZONTAL_MARGINS + col * CELL_SIZE : 0,
    y: row ? VERTICAL_MARGINS + row * CELL_SIZE : 0
  }
}

function blockToCode(block) {
  const coordinates = posToCoord(block.row, block.col);
  let w = CELL_SIZE * block.width;
  if (block.col == 0) w += HORIZONTAL_MARGINS;
  if (block.col + block.width == MAP_WIDTH) w += HORIZONTAL_MARGINS;
  let h = CELL_SIZE * block.height;
  if (block.row == 0) h += VERTICAL_MARGINS;
  if (block.row + block.row == MAP_HEIGHT) h += VERTICAL_MARGINS;
  return `new Obstacle(${coordinates.x}, ${coordinates.y}, ${w}, ${h}),`;
}

function generateBlocks(levelMat, preferVertical = true, longFirst = false) {
  const transposeBlock = block => {
    return { row: block.col, col: block.row, width: block.height, height: block.width }
  };

  if (!longFirst && !preferVertical) {
    const rowBlocks = collectXsRows(levelMat, 2);
    rowBlocks.forEach(b => removeBlock(levelMat, b));
    const transposedMat = transpose(levelMat);
    const colBlocks = collectXsRows(transposedMat, 1).map(transposeBlock);
    return [...rowBlocks, ...colBlocks];

  } else if (!longFirst && preferVertical) {
    const transposedMat = transpose(levelMat);
    const colBlocks = collectXsRows(transposedMat, 2);
    colBlocks.forEach(b => removeBlock(transposedMat, b));
    levelMat = transpose(transposedMat);
    const rowBlocks = collectXsRows(levelMat, 1);
    return [...rowBlocks, ...colBlocks.map(transposeBlock)];
  }

  // Long first
  const preferVerticalCoeff = preferVertical ? 1 : -1;
  const findBlocks = mat => {
    const transposedMat = transpose(mat);
    const rowBlocks = collectXsRows(mat, 1);
    const colBlocks = collectXsRows(transposedMat, 2).map(transposeBlock);
    return [...rowBlocks, ...colBlocks];
  }

  // Sort blocks by area, break equality by height
  const sortBlocks = blocks => blocks.sort((b1, b2) => {
    const areaDiff = b2.width * b2.height - b1.width * b1.height;
    return areaDiff > 0 ? 1 : (areaDiff == 0 && (b2.height - b1.height) * preferVerticalCoeff > 0) ? 1 : -1;
  });

  const finalBlocks = [];
  let blocks = sortBlocks(findBlocks(levelMat));
  while (blocks.length > 0) {
    finalBlocks.push(blocks[0]);
    removeBlock(levelMat, blocks[0]);
    blocks = sortBlocks(findBlocks(levelMat)); // TODO: Should be done only if the new top block is missing Xs
    // console.log(blocks);
  }
  return finalBlocks;
}

function findPieces(mat, symbol) {
  const pieces = [];
  mat.forEach((row, i) => {
    const r = new RegExp(symbol, 'g');
    let match;
    while (match = r.exec(row)) {
      pieces.push({row:i, col: match.index});
    }
  });
  return pieces;
}

async function main() {
  const levelPath = process.argv[2];
  let levelMap = await readLvlFile(levelPath);

  // console.log('input:', levelMap);

  console.log('// Items: ')
  const items = findPieces(levelMap, 'O');
  items.forEach(item => {
    let coordinates = posToCoord(item.row, item.col);
    console.log(`new Piece(${coordinates.x + CELL_SIZE / 2}, ${coordinates.y + CELL_SIZE / 2}, 40, 'res/imgs/items/paper.svg'),`);
  })

  console.log('// Viruses: ')
  const viruses = findPieces(levelMap, 'C');
  viruses.forEach(virus => {
    let coordinates = posToCoord(virus.row, virus.col);
    console.log(`new Piece(${coordinates.x + CELL_SIZE / 2}, ${coordinates.y + CELL_SIZE / 2}, 40, 'res/imgs/virus.svg'),`);
  })

  console.log('\n// Obstacles:');
  const blocks = generateBlocks(levelMap, /*preferVertical = */false, /*longFirst = */true);
  console.log(blocks.map(blockToCode).join('\n'));

}

// console.log(blockToCode({ row: 0, col: 13, width: 1, height: 1 }));
// console.log(blockToCode({ row: 5, col: 9, width: 1, height: 1 }));

main();