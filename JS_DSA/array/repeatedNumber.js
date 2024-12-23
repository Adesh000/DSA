// find the duplicate number in the array

const repeatedNumber = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (i !== j && arr[i] === arr[j]) {
        return arr[i];
      }
    }
  }
};

console.log("Repeated Number", repeatedNumber([1, 4, 1, 7, 9, 6]));
