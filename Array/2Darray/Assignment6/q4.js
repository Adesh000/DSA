function findMaxLength(nums) {
  const n = nums.length;
  const map = new Map();
  let maxLen = 0;
  let sum = 0;

  for (let i = 0; i < n; i++) {
    // Treat 0 as -1 to calculate the cumulative sum
    sum += nums[i] === 1 ? 1 : -1;

    if (sum === 0) {
      maxLen = i + 1;
    } else if (map.has(sum)) {
      maxLen = Math.max(maxLen, i - map.get(sum));
    } else {
      map.set(sum, i);
    }
  }

  return maxLen;
}

console.log(findMaxLength([0, 1])); // Output: 2 (The contiguous subarray with an equal number of 0s and 1s is [0, 1])
console.log(findMaxLength([0, 1, 0])); // Output: 2 (The contiguous subarray with an equal number of 0s and 1s is [0, 1])
console.log(findMaxLength([0, 0, 1])); // Output: 2 (The contiguous subarray with an equal number of 0s and 1s is [0, 0] or [1, 0])
console.log(findMaxLength([0, 0, 1, 0, 0, 0, 1, 1])); // Output: 6 (The contiguous subarray with an equal number of 0s and 1s is [0, 0, 1, 0, 0, 0] or [1, 0, 0, 0, 1, 1])
