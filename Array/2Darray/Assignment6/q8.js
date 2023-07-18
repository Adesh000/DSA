function multiplySparseMatrices(mat1, mat2) {
  const m = mat1.length;
  const k = mat1[0].length;
  const n = mat2[0].length;

  // Initialize the result matrix with zeros
  const result = new Array(m).fill(0).map(() => new Array(n).fill(0));

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      for (let p = 0; p < k; p++) {
        if (mat1[i][p] !== 0 && mat2[p][j] !== 0) {
          result[i][j] += mat1[i][p] * mat2[p][j];
        }
      }
    }
  }

  return result;
}

const mat1 = [
  [1, 0, 0],
  [-1, 0, 3],
];

const mat2 = [
  [7, 0, 0],
  [0, 0, 0],
  [0, 0, 1],
];

console.log(multiplySparseMatrices(mat1, mat2));
/* Output: 
  [
    [7, 0, 0],
    [-7, 0, 3]
  ]
  */
