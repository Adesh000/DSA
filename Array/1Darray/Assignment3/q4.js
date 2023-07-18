function searchInsert(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      return mid; // Target found, return its index
    } else if (nums[mid] < target) {
      left = mid + 1; // Target lies in the right half
    } else {
      right = mid - 1; // Target lies in the left half
    }
  }

  return left; // Target not found, return the position where it should be inserted
}

const nums = [1, 3, 5, 6];
const target = 5;
console.log(searchInsert(nums, target)); // Output: 2 (Target 5 is found at index 2)

const target2 = 2;
console.log(searchInsert(nums, target2)); // Output: 1 (Target 2 is not found, it should be inserted at index 1)
