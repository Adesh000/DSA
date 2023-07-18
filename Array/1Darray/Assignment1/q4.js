function incrementLargeInteger(digits) {
  const n = digits.length;

  // Start from the least significant digit
  for (let i = n - 1; i >= 0; i--) {
    digits[i] += 1; // Increment the current digit by one

    if (digits[i] < 10) {
      // If there is no carry, we can stop here
      return digits;
    } else {
      // Carry over to the next significant digit
      digits[i] = 0;
    }
  }

  // If the loop completes without returning, it means there is a carry in the most significant digit
  digits.unshift(1); // Add a new digit at the beginning with value 1
  return digits;
}

console.log(incrementLargeInteger([1, 2, 3])); // Output: [1, 2, 4] (123 + 1 = 124)
console.log(incrementLargeInteger([9, 9, 9])); // Output: [1, 0, 0, 0] (999 + 1 = 1000)
console.log(incrementLargeInteger([2, 9, 9])); // Output: [3, 0, 0] (299 + 1 = 300)
console.log(incrementLargeInteger([9, 0, 9])); // Output: [9, 1, 0] (909 + 1 = 910)
