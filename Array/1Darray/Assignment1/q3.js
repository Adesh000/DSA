function searchInsert(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return left;
}

const nums = [1, 3, 5, 6];
const target = 5;
console.log(searchInsert(nums, target)); // Output: 2 (5 is found at index 2)

const target2 = 2;
console.log(searchInsert(nums, target2)); // Output: 1 (2 would be inserted at index 1, between 1 and 3)

const target3 = 7;
console.log(searchInsert(nums, target3)); // Output: 4 (7 would be inserted at index 4, after 6)
