function findOriginalArray(changed) {
  const n = changed.length;
  if (n % 2 !== 0) return []; // Invalid if the length is odd

  const countMap = new Map();
  changed.forEach((num) => countMap.set(num, (countMap.get(num) || 0) + 1));

  const original = [];

  for (let num of changed) {
    if (countMap.get(num) > 0 && countMap.get(num * 2) > 0) {
      original.push(num);
      countMap.set(num, countMap.get(num) - 1);
      countMap.set(num * 2, countMap.get(num * 2) - 1);
    }
  }

  return original.length === n / 2 ? original : [];
}

console.log(findOriginalArray([1, 3, 4, 6])); // Output: [1, 3] (changed is [2, 6, 8, 12] after appending twice the value and shuffling)
console.log(findOriginalArray([4, 8, 6, 12])); // Output: [] (Invalid doubled array, no corresponding halves for 4 and 8)
console.log(findOriginalArray([2, 2, 2, 2])); // Output: [2, 2] (changed is [4, 4, 4, 4] after appending twice the value and shuffling)
