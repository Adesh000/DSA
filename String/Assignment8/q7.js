function decodeString(s) {
  let stack = [];
  let repeatCount = 0;
  let currentString = "";

  for (let char of s) {
    if (char >= "0" && char <= "9") {
      repeatCount = repeatCount * 10 + parseInt(char);
    } else if (char === "[") {
      stack.push(currentString);
      stack.push(repeatCount);
      currentString = "";
      repeatCount = 0;
    } else if (char === "]") {
      let k = stack.pop();
      let prevString = stack.pop();
      currentString = prevString + currentString.repeat(k);
    } else {
      currentString += char;
    }
  }

  return currentString;
}

const encodedString = "3[a2[c]]";
console.log(decodeString(encodedString)); // Output: "accaccacc"
