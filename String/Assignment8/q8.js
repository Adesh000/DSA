function canBeEqual(s, goal) {
  if (s === goal) {
    return true;
  }

  const mismatched = [];
  const positions = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] !== goal[i]) {
      mismatched.push(s[i]);
      positions.push(i);
    }
  }

  return (
    mismatched.length === 2 &&
    mismatched[0] === goal[positions[1]] &&
    mismatched[1] === goal[positions[0]]
  );
}

console.log(canBeEqual("abcd", "cbad")); // Output: true
console.log(canBeEqual("abc", "acb")); // Output: false
console.log(canBeEqual("abc", "abc")); // Output: true
