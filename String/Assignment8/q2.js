function checkValidString(s) {
  const leftStack = [];
  const starStack = [];

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (char === "(") {
      leftStack.push(i);
    } else if (char === "*") {
      starStack.push(i);
    } else {
      if (leftStack.length > 0) {
        leftStack.pop();
      } else if (starStack.length > 0) {
        starStack.pop();
      } else {
        return false;
      }
    }
  }

  while (leftStack.length > 0 && starStack.length > 0) {
    if (leftStack.pop() > starStack.pop()) {
      return false;
    }
  }

  return leftStack.length === 0;
}

console.log(checkValidString("()")); // Output: true (valid)
console.log(checkValidString("(*)")); // Output: true (valid)
console.log(checkValidString("(*))")); // Output: true (valid)
console.log(checkValidString("())")); // Output: false (not valid)
