function reverseWords(s) {
  const words = s.split(" ");

  for (let i = 0; i < words.length; i++) {
    words[i] = reverseString(words[i]);
  }

  return words.join(" ");
}

function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log(reverseWords("Let's code together")); // Output: "steL's edoc rehtegot"
console.log(reverseWords("Hello World")); // Output: "olleH dlroW"
console.log(reverseWords("This is a test")); // Output: "sihT si a tset"
