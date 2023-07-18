function isStrobogrammatic(num) {
  const strobogrammaticMap = new Map([
    ["0", "0"],
    ["1", "1"],
    ["6", "9"],
    ["8", "8"],
    ["9", "6"],
  ]);

  let left = 0;
  let right = num.length - 1;

  while (left <= right) {
    const leftChar = num[left];
    const rightChar = num[right];

    if (
      !strobogrammaticMap.has(leftChar) ||
      strobogrammaticMap.get(leftChar) !== rightChar
    ) {
      return false;
    }

    left++;
    right--;
  }

  return true;
}

console.log(isStrobogrammatic("69")); // Output: true (rotated 180 degrees: 69)
console.log(isStrobogrammatic("88")); // Output: true (rotated 180 degrees: 88)
console.log(isStrobogrammatic("962")); // Output: false (rotated 180 degrees: 269, not a strobogrammatic number)
console.log(isStrobogrammatic("101")); // Output: false (rotated 180 degrees: 101, not a strobogrammatic number)
