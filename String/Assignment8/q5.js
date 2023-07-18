function compress(chars) {
  let readPtr = 0;
  let writePtr = 0;

  while (readPtr < chars.length) {
    let currentChar = chars[readPtr];
    let count = 1;

    readPtr++;

    while (readPtr < chars.length && chars[readPtr] === currentChar) {
      count++;
      readPtr++;
    }

    chars[writePtr] = currentChar;
    writePtr++;

    if (count > 1) {
      let countStr = count.toString();
      for (let digit of countStr) {
        chars[writePtr] = digit;
        writePtr++;
      }
    }
  }

  return writePtr;
}

const chars = ["a", "a", "b", "b", "c", "c", "c"];
const newLength = compress(chars);
console.log(chars.slice(0, newLength)); // Output: ['a', '2', 'b', '2', 'c', '3']
