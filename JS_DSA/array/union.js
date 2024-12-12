// Find the union of arrays

const union = (arr1, arr2) => {
  let newArr = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        newArr.push(arr1[i]);
      }
    }
  }

  let uniqueArr = [...new Set(newArr)];

  console.log("Array", newArr, uniqueArr);
};

union([1, 8, 5, 6, 1, 2, 3], [2, 5, 3, 6, 7, 1, 6]);
