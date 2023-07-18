function maxCount(m, n, ops) {
  let minRow = m;
  let minCol = n;

  for (const [ai, bi] of ops) {
    minRow = Math.min(minRow, ai);
    minCol = Math.min(minCol, bi);
  }

  return minRow * minCol;
}

const m = 3;
const n = 3;
const ops = [
  [2, 2],
  [3, 3],
];

console.log(maxCount(m, n, ops)); // Output: 4 (The matrix after operations will be [[1, 1, 0], [1, 1, 0], [0, 0, 0]], and the maximum integer is 1, which occurs 4 times)
