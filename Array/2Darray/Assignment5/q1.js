function convertTo2DArray(original, m, n) {
  const totalElements = original.length;

  if (totalElements !== m * n) {
    return [];
  }

  const result = new Array(m).fill().map(() => new Array(n).fill(0));

  for (let i = 0; i < totalElements; i++) {
    const row = Math.floor(i / n);
    const col = i % n;
    result[row][col] = original[i];
  }

  return result;
}

const original = [1, 2, 3, 4, 5, 6];
const m = 2;
const n = 3;

console.log(convertTo2DArray(original, m, n));
// Output: [[1, 2, 3], [4, 5, 6]] (The 2D array constructed from the original array)
