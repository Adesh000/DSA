function generateMatrix(n) {
  const matrix = new Array(n).fill(0).map(() => new Array(n).fill(0));

  let num = 1;
  let top = 0;
  let bottom = n - 1;
  let left = 0;
  let right = n - 1;

  while (num <= n * n) {
    // Move from left to right
    for (let i = left; i <= right; i++) {
      matrix[top][i] = num++;
    }
    top++;

    // Move from top to bottom
    for (let i = top; i <= bottom; i++) {
      matrix[i][right] = num++;
    }
    right--;

    // Move from right to left
    for (let i = right; i >= left; i--) {
      matrix[bottom][i] = num++;
    }
    bottom--;

    // Move from bottom to top
    for (let i = bottom; i >= top; i--) {
      matrix[i][left] = num++;
    }
    left++;
  }

  return matrix;
}


console.log(generateMatrix(3));
/* Output: 
[
  [1, 2, 3],
  [8, 9, 4],
  [7, 6, 5]
]
*/
