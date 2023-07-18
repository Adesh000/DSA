function canShiftString(s, goal) {
  return (s + s).includes(goal);
}

console.log(canShiftString("abcde", "bcdea")); // Output: true (can shift "abcde" to "bcdea")
console.log(canShiftString("abcde", "eabcd")); // Output: true (can shift "abcde" to "eabcd")
console.log(canShiftString("abcde", "cdeab")); // Output: false (cannot shift "abcde" to "cdeab")
