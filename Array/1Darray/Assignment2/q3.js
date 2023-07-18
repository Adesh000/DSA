function findLHS(nums) {
  const numFrequency = new Map();

  // Count the frequency of each number
  for (const num of nums) {
    numFrequency.set(num, (numFrequency.get(num) || 0) + 1);
  }

  let longestSubsequenceLength = 0;

  // Check for each number if there is another number that differs by exactly 1
  for (const [num, frequency] of numFrequency) {
    if (numFrequency.has(num + 1)) {
      const subsequenceLength = frequency + numFrequency.get(num + 1);
      longestSubsequenceLength = Math.max(
        longestSubsequenceLength,
        subsequenceLength
      );
    }
  }

  return longestSubsequenceLength;
}

const nums = [1, 3, 2, 2, 5, 2, 3, 7]; // The longest harmonious subsequence is [3, 2, 2, 2, 3], length: 5
console.log(findLHS(nums)); // Output: 5
