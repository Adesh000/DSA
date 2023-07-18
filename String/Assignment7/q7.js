function backspaceCompare(s, t) {
  return processString(s) === processString(t);
}

function processString(s) {
  const stack = [];
  for (const char of s) {
    if (char === "#") {
      removeBackspace(stack);
    } else {
      stack.push(char);
    }
  }
  return stack.join("");
}

function removeBackspace(stack) {
  if (stack.length > 0) {
    stack.pop();
  }
}

console.log(backspaceCompare("ab#c", "ad#c")); // Output: true ("abc" and "adc" are equal after backspaces)
console.log(backspaceCompare("ab##", "c#d#")); // Output: true ("", and "" are equal after backspaces)
console.log(backspaceCompare("a##c", "#a#c")); // Output: true ("c" and "c" are equal after backspaces)
console.log(backspaceCompare("a#c", "b")); // Output: false ("ac" and "b" are not equal after backspaces)
