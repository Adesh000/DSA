function findDuplicateAndMissing(nums) {
  const n = nums.length;
  let dup, missing;

  // Cyclic sort to place each number at its correct position
  for (let i = 0; i < n; i++) {
    while (nums[i] !== i + 1 && nums[nums[i] - 1] !== nums[i]) {
      // Swap elements to put nums[i] at its correct position
      const temp = nums[i];
      nums[i] = nums[temp - 1];
      nums[temp - 1] = temp;
    }
  }

  // Find the duplicate and missing numbers
  for (let i = 0; i < n; i++) {
    if (nums[i] !== i + 1) {
      dup = nums[i];
      missing = i + 1;
      break;
    }
  }

  return [dup, missing];
}

const nums = [3, 1, 2, 5, 2]; // One number is duplicated (2) and one number is missing (4)
console.log(findDuplicateAndMissing(nums)); // Output: [2, 4]
