function sortedSquares(nums) {
  const n = nums.length;
  const result = new Array(n);
  let left = 0;
  let right = n - 1;
  let index = n - 1;

  while (left <= right) {
    const leftSquare = nums[left] * nums[left];
    const rightSquare = nums[right] * nums[right];

    if (leftSquare >= rightSquare) {
      result[index] = leftSquare;
      left++;
    } else {
      result[index] = rightSquare;
      right--;
    }

    index--;
  }

  return result;
}

const nums = [-4, -1, 0, 3, 10];
console.log(sortedSquares(nums));
// Output: [0, 1, 9, 16, 100] (The squares of the numbers are [16, 1, 0, 9, 100] and sorted in non-decreasing order)
