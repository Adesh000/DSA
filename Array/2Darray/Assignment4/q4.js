function arrayPairSum(nums) {
  nums.sort((a, b) => a - b); // Sort the array in ascending order
  let sum = 0;

  for (let i = 0; i < nums.length; i += 2) {
    sum += nums[i];
  }

  return sum;
}

const nums = [1, 4, 3, 2];
console.log(arrayPairSum(nums)); // Output: 4 (The pairs are [1, 2] and [3, 4], and the sum of minimum values is 1 + 3 = 4)
