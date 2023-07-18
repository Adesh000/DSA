function reverseStr(s, k) {
  const arr = s.split("");

  for (let i = 0; i < arr.length; i += 2 * k) {
    let left = i;
    let right = Math.min(i + k - 1, arr.length - 1);

    while (left < right) {
      const temp = arr[left];
      arr[left] = arr[right];
      arr[right] = temp;
      left++;
      right--;
    }
  }

  return arr.join("");
}

console.log(reverseStr("abcdefg", 2)); // Output: "bacdfeg"
console.log(reverseStr("abcdefgh", 3)); // Output: "cbadefhg"
console.log(reverseStr("abcd", 4)); // Output: "dcba"
