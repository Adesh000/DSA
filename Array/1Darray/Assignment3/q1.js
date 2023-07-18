function threeSumClosest(nums, target) {
  nums.sort((a, b) => a - b); // Sort the array in ascending order
  let closestSum = Infinity;

  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      if (Math.abs(sum - target) < Math.abs(closestSum - target)) {
        closestSum = sum; // Update the closest sum if necessary
      }

      if (sum < target) {
        left++; // Move the left pointer to increase the sum
      } else if (sum > target) {
        right--; // Move the right pointer to decrease the sum
      } else {
        return sum; // Found the exact target sum, return immediately
      }
    }
  }

  return closestSum;
}

const nums = [-1, 2, 1, -4];
const target = 1;
console.log(threeSumClosest(nums, target)); // Output: 2 (The closest sum is 2, which is the sum of -1, 2, and 1)
