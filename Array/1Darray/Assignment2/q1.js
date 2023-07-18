function arrayPairSum(nums) {
  // Sort the array in ascending order
  nums.sort((a, b) => a - b);

  let sum = 0;

  // Take the sum of every alternate element
  for (let i = 0; i < nums.length; i += 2) {
    sum += nums[i];
  }

  return sum;
}

const nums = [1, 4, 3, 2]; // Pairs: (1, 2), (3, 4), Min elements: 1, 3, Maximized sum: 1 + 3 = 4
console.log(arrayPairSum(nums)); // Output: 4
