function findMin(nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] < nums[right]) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return nums[left];
}

console.log(findMin([4, 5, 6, 7, 0, 1, 2])); // Output: 0 (The minimum element is 0)
console.log(findMin([0, 1, 2, 4, 5, 6, 7])); // Output: 0 (The minimum element is 0)
console.log(findMin([3, 4, 5, 1, 2])); // Output: 1 (The minimum element is 1)
