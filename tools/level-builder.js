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

async function main() {
  const levelPath = process.argv[2];
  const levelMap = await readLvlFile(levelPath);
  const mapWidth = levelMap[0].length;
  const mapHeight = levelMap.length;

  console.log('input:', levelMap);
  const blocks = [];

  // Choose rows
  levelMap.forEach((row, i) => {
    const r = /X+/g;
    let match;
    while (match = r.exec(row)) {
      // console.log(match);
      if (match[0].length < 2) continue;

      blocks.push({ row: i, col: match.index, width: match[0].length, height: 1 });
      levelMap[i] = levelMap[i].substring(0, match.index)
        + ' '.repeat(match[0].length)
        + levelMap[i].substring(match.index + match[0].length);
    }
  });

  // Choose columns
  let transposed = transpose(levelMap);
  transposed.forEach((col, j) => {
    const r = /X+/g;
    let match;
    while (match = r.exec(col)) {
      // console.log(match);
      blocks.push({ row: match.index, col: j, width: 1, height: match[0].length });
    }
  });

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

try {
  main();
} catch (err) {
  console.log(err);
}