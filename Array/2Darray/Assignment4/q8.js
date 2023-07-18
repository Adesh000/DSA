function shuffleArray(nums) {
  const n = nums.length / 2;
  const result = [];

  for (let i = 0; i < n; i++) {
    result.push(nums[i]);
    result.push(nums[i + n]);
  }

  return result;
}

const nums = [1, 2, 3, 4, 5, 6];
console.log(shuffleArray(nums)); // Output: [1, 4, 2, 5, 3, 6] (The array in the form [x1, y1, x2, y2, x3, y3])
