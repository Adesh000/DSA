function search(nums, target) {
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

  return -1; // Target not found, return -1
}

const nums = [-1, 0, 3, 5, 9, 12];
const target = 9;
console.log(search(nums, target)); // Output: 4 (Target 9 is found at index 4)

const target2 = 2;
console.log(search(nums, target2)); // Output: -1 (Target 2 is not found, returns -1)
