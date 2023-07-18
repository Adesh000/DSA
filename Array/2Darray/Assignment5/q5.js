function distanceValue(arr1, arr2, d) {
  let distance = 0;

  for (const num1 of arr1) {
    let found = false;

    for (const num2 of arr2) {
      if (Math.abs(num1 - num2) <= d) {
        found = true;
        break;
      }
    }

    if (!found) {
      distance++;
    }
  }

  return distance;
}

const arr1 = [4, 5, 8];
const arr2 = [10, 9, 1, 8];
const d = 2;

console.log(distanceValue(arr1, arr2, d)); // Output: 2 (The distance value is 2, as 4 and 5 from arr1 have no element in arr2 satisfying |arr1[i] - arr2[j]| <= d)
