// Find the max and min element of the array using min number of operations

const maxMin = (arr) => {
  let min = Infinity;
  let max = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= min) {
      min = arr[i];
    }
    if (arr[i] >= max) {
      max = arr[i];
    }
  }
  console.log("min", min, max);
};

maxMin([6, 2, 0, 8, 3, 7]);
