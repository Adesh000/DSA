// find  kth smallest element in the array where k is smaller than the length of the array

const sortGivenArray = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      let temp = arr[i + 1];
      arr[i + 1] = arr[i];
      arr[i] = temp;

      i = -1;
    }
  }
  return arr;
};

const kthSmallest = (arr, k) => {
  const sortedArr = sortGivenArray(arr);
  console.log("Kth smallest element: ", sortedArr[k - 1]);
};
kthSmallest([3, 2, 1, 5, 6, 4], 2);
