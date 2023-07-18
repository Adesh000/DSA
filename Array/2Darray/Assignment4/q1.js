function commonElementsInThreeArrays(arr1, arr2, arr3) {
  const result = [];
  let i = 0;
  let j = 0;
  let k = 0;

  while (i < arr1.length && j < arr2.length && k < arr3.length) {
    if (arr1[i] === arr2[j] && arr2[j] === arr3[k]) {
      result.push(arr1[i]);
      i++;
      j++;
      k++;
    } else if (arr1[i] < arr2[j]) {
      i++;
    } else if (arr2[j] < arr3[k]) {
      j++;
    } else {
      k++;
    }
  }

  return result;
}

const arr1 = [1, 3, 5, 7, 9];
const arr2 = [3, 4, 5, 6, 7];
const arr3 = [5, 7, 8, 9, 10];
console.log(commonElementsInThreeArrays(arr1, arr2, arr3)); // Output: [5, 7]
