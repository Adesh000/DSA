// Reverse the given array so that its first element becomes the last and vice-versa

const reverseArray = (arr) => {
  const revArray = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    revArray.push(arr[i]);
  }
  return revArray;
};

console.log(reverseArray([4, 6, 7, 9, 3, 5]));

const reverseArr = (arr) => {
  for (let i = 0; i < Math.floor((arr.length - 1) / 2); i++) {
    let temp = arr[i];
    console.log("first", temp);
    arr[i] = arr[arr.length - (1 + i)];
    arr[arr.length - (1 + i)] = temp;
  }
  console.log("Swapped items:", arr);
};

reverseArr([1, 3, 5, 8, 1, 0]);
