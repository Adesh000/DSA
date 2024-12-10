// Reverse the given array so that its first element becomes the last and vice-versa

const reverseArray = (arr) => {
  const revArray = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    revArray.push(arr[i]);
  }
  return revArray;
};

console.log(reverseArray([4, 6, 7, 9, 3, 5]));
