function maximumProduct(nums) {
  nums.sort((a, b) => a - b); // Sort the array in ascending order

  const n = nums.length;

  // Maximum product can either be the product of the three largest elements or the product of two smallest elements and the largest element
  const option1 = nums[n - 1] * nums[n - 2] * nums[n - 3];
  const option2 = nums[0] * nums[1] * nums[n - 1];

  return Math.max(option1, option2);
}

const nums = [1, 2, 3, 4];
console.log(maximumProduct(nums)); // Output: 24 (Product of three largest elements: 2 * 3 * 4)

const nums2 = [-1, -2, -3, -4];
console.log(maximumProduct(nums2)); // Output: -6 (Product of two smallest elements and the largest element: -1 * -2 * -4)
