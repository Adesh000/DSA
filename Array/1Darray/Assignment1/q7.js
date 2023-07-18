function moveZerosToEnd(nums) {
  let nonZeroIndex = 0; // Pointer to keep track of the position to place non-zero elements

  // Iterate through the array
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      // If the current element is non-zero, move it to the nonZeroIndex position
      nums[nonZeroIndex] = nums[i];
      nonZeroIndex++;
    }
  }

  // Fill the remaining positions with zeros
  for (let i = nonZeroIndex; i < nums.length; i++) {
    nums[i] = 0;
  }
}

const nums = [0, 1, 0, 3, 12];
moveZerosToEnd(nums);
console.log(nums); // Output: [1, 3, 12, 0, 0] (All zeros moved to the end, non-zero elements maintain relative order)
