function findDuplicates(nums) {
  const result = [];

  for (let i = 0; i < nums.length; i++) {
    const num = Math.abs(nums[i]);
    if (nums[num - 1] < 0) {
      result.push(num);
    } else {
      nums[num - 1] = -nums[num - 1];
    }
  }

  return result;
}

const nums = [4, 3, 2, 7, 8, 2, 1, 1];
console.log(findDuplicates(nums)); // Output: [2, 1] (The integers that appear twice in the array are 2 and 1)
