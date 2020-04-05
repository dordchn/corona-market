/**
 * Utility for manipulating characters matrices represented as an array of strings. Format example:
 * const mat = [
 *   'abcd',
 *   'efgh',
 * ];
 */

 // Transposes the given matrix.
function transpose(mat) {
  const transposed = [];
  for (let col = 0; col < mat[0].length; col++) {
    transposed[col] = mat.map(row => row[col]).join('');
  }
  return transposed;
}

// Fills the given block in the matrix with the given symbol.
function fillBlock(mat, block, symbol) {
  for (let i = block.row; i < block.row + block.height; i++) {
    mat[i] = mat[i].substring(0, block.col)
      + symbol.repeat(block.width)
      + mat[i].substring(block.col + block.width);
  }
}

// Finds all the occurrences of the given symbol in the matrix.
function findSymbol(mat, symbol) {
  const pieces = [];
  mat.forEach((row, i) => {
    const r = new RegExp(symbol, 'g');
    let match;
    while (match = r.exec(row)) {
      pieces.push({ row: i, col: match.index });
    }
  });
  return pieces;
}

module.exports = {transpose, fillBlock, findSymbol};