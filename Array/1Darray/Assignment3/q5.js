function plusOne(digits) {
  const n = digits.length;
  let carry = 1; // Start with carry = 1 since we want to increment the number by one

  for (let i = n - 1; i >= 0; i--) {
    const sum = digits[i] + carry;
    digits[i] = sum % 10; // Update the current digit
    carry = Math.floor(sum / 10); // Calculate the carry for the next digit

    // If there is no carry, we can stop the loop as we have incremented the number
    if (carry === 0) {
      break;
    }
  }

  // If there's still a carry after the loop ends, it means we need to add a new digit at the beginning
  if (carry > 0) {
    digits.unshift(carry);
  }

  return digits;
}

const digits = [1, 2, 3];
console.log(plusOne(digits)); // Output: [1, 2, 4] (123 + 1 = 124)

const digits2 = [9, 9, 9];
console.log(plusOne(digits2)); // Output: [1, 0, 0, 0] (999 + 1 = 1000)
