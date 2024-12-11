// sort the array containing 0s 1s and 2s only

//Brute force approach
const ascendingOrder = (arr) => {
  let countZero = 0;
  let countOne = 0;
  let countTwo = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) countZero += 1;
    if (arr[i] === 1) countOne += 1;
    if (arr[i] === 2) countTwo += 1;
  }
  console.log("Count : ", countOne, countTwo, countZero);

  let i = 0;
  while (countZero > 0) {
    arr[i] = 0;
    i = i + 1;
    countZero -= 1;
  }
  while (countOne > 0) {
    arr[i] = 1;
    i = i + 1;
    countOne -= 1;
  }
  while (countTwo > 0) {
    arr[i] = 2;
    i = i + 1;
    countTwo -= 1;
  }
  console.log("Sorted array: ", arr);
};

ascendingOrder([0, 1, 1, 2, 0, 1, 0, 2, 2, 1, 2, 0]);

// Three way partitioning
const threeWayPartitioning = (arr) => {
  let low = 0,
    mid = 0,
    high = arr.length - 1;

  while (mid <= high) {
    if (arr[mid] === 0) {
      let temp = arr[mid];
      arr[mid] = arr[low];
      arr[low] = temp;
      low += 1;
      mid += 1;
    }
    if (arr[mid] === 1) {
      mid += 1;
    }
    if (arr[mid] === 2) {
      let temp = arr[high];
      arr[high] = arr[mid];
      arr[mid] = temp;
      high -= 1;
    }
  }

  console.log("Three pointer sorting: ", arr);
};

threeWayPartitioning([0, 1, 1, 2, 0, 1, 0, 2, 2, 1, 2, 0]);
