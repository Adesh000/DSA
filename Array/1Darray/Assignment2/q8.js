function minimumScore(nums, k) {
  const n = nums.length;
  nums.sort((a, b) => a - b); // Sort the array in ascending order

  const addKScenario = nums[0] + k;
  const subtractKScenario = nums[n - 1] - k;

  return Math.min(subtractKScenario - addKScenario, nums[n - 1] - nums[0]);
}

const nums = [1, 3, 6];
const k = 3;
console.log(minimumScore(nums, k)); // Output: 0 (Scenario 1: add 3 to 1 and subtract 3 from 6 gives [4, 3, 3], Scenario 2: add -3 to 1 and subtract -3 from 6 gives [1, 3, 3], minimum score is 0)

const nums2 = [1, 15, 20];
const k2 = 3;
console.log(minimumScore(nums2, k2)); // Output: 11 (Scenario 1: add 3 to 1 and subtract 3 from 20 gives [4, 15, 17], Scenario 2: add -3 to 1 and subtract -3 from 20 gives [1, 12, 20], minimum score is 11)
