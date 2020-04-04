// Node tool created in order to simplify level designs (Created especially for level 4).

const fs = require('fs');
const util = require('util');
const readFile = util.promisify(fs.readFile);

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
  console.log('input:', levelMap);
  const blocks = [];

  levelMap.forEach((row, i) => {
    const r = /X+/g;
    let match;
    while (match = r.exec(row)) {
      // console.log(match);
      blocks.push({ row: i, col: match.index, width: match[0].length, height: 1 });
      // levelMap[i] = levelMap[i].substring(0, match.index)
      //   + ' '.repeat(match[0].length)
      //   + levelMap[i].substring(match.index + match[0].length);
    }
    // console.log('\n\n');
  });

  // Print blocks
  console.log(blocks)
  console.log(
    blocks.map(block => {
      const x = block.col ? 6 + block.col * 44 : 0;
      const y = block.row ? 2 + block.row * 44 : 0;
      let w = 44 * block.width;
      if (block.col == 0) w += 6;
      if (block.col + block.width == 23) w += 6;
      let h = 44 * block.height;
      if (block.row == 0) h += 2;
      if (block.row + block.row == 13) h += 2;
      return `new Obstacle(${x}, ${y}, ${w}, ${h}),`;
    }).join('\n'));
}

try {
  main();
} catch (err) {
  console.log(err);
}