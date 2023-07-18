function validMountainArray(arr) {
  const n = arr.length;
  let i = 0;

  // Find the peak element
  while (i < n - 1 && arr[i] < arr[i + 1]) {
    i++;
  }

  // Return false if there is no increasing part or no decreasing part
  if (i === 0 || i === n - 1) {
    return false;
  }

  // Check the decreasing part of the array
  while (i < n - 1 && arr[i] > arr[i + 1]) {
    i++;
  }

  // Return true if the peak element is at the last index
  return i === n - 1;
}

console.log(validMountainArray([2, 1])); // Output: false (Not enough elements for a mountain array)
console.log(validMountainArray([3, 5, 5])); // Output: false (No decreasing part)
console.log(validMountainArray([0, 3, 2, 1])); // Output: true (Valid mountain array)
console.log(validMountainArray([1, 2, 3, 4, 3, 2, 1])); // Output: true (Valid mountain array)
