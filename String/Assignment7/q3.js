function addStrings(num1, num2) {
  let i = num1.length - 1;
  let j = num2.length - 1;
  let carry = 0;
  let result = "";

  while (i >= 0 || j >= 0 || carry > 0) {
    const digit1 = i >= 0 ? Number(num1[i]) : 0;
    const digit2 = j >= 0 ? Number(num2[j]) : 0;

    const sum = digit1 + digit2 + carry;
    carry = Math.floor(sum / 10);
    result = (sum % 10) + result;

    i--;
    j--;
  }

  return result;
}

console.log(addStrings("123", "456")); // Output: "579" (123 + 456 = 579)
console.log(addStrings("9", "99")); // Output: "108" (9 + 99 = 108)
console.log(addStrings("0", "0")); // Output: "0" (0 + 0 = 0)
