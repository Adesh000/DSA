function transpose(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const result = [];

  for (let j = 0; j < cols; j++) {
    result.push([]);
    for (let i = 0; i < rows; i++) {
      result[j].push(matrix[i][j]);
    }
  }

  return result;
}
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(transpose(matrix));
// Output: [
//   [1, 4, 7],
//   [2, 5, 8],
//   [3, 6, 9]
// ]
