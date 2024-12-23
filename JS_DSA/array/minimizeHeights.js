//find the minimun height difference of the towers

const minHeightDiff = (arr, k) => {
  let sortedArr = arr.sort((a, b) => a - b);
  console.log("Sorted", sortedArr);

  let res = arr[arr.length - 1] - arr[0];

  for (let i = 1; i < arr.length - 1; i++) {
    if (arr[i] - k < 0) continue;
    let minH = Math.min(arr[0] + k, arr[i] - k);
    let maxH = Math.max(arr[i - 1] + k, arr[arr.length - 1] - k);

    res = Math.min(res, maxH - minH);
  }
  console.log("Min height", res);
};
minHeightDiff([2, 6, 3, 8, 3, 7, 10], 4);
