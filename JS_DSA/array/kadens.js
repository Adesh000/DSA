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

const kadensApproach = (arr) => {
  let maxSum = arr[0];
  let maxEnding = arr[0];

  for (let i = 1; i < arr.length; i++) {
    maxEnding = Math.max(maxEnding + arr[i], arr[i]);
    maxSum = Math.max(maxSum, maxEnding);
  }

  console.log("Max sum", maxSum);
};

kadensApproach([2, -5, 6, 7, -3, -8, 9, 5]);
