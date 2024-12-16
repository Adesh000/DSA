// find the largest sum of the sub array

const largestSubArraySum = (arr) => {
  let maxSum = 0;
  for (let i = 0; i <= arr.length - 1; i++) {
    let currSum = 0;
    for (let j = i; j < arr.length; j++) {
      currSum += arr[j];
      maxSum = Math.max(maxSum, currSum);
    }
  }
  console.log("Max sum", maxSum);
};

largestSubArraySum([2, -7, 2, 4, -2, 1, 0]);

// O(n^2) TC
