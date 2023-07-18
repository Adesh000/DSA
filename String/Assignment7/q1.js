function isIsomorphic(s, t) {
  if (s.length !== t.length) {
    return false;
  }

  const charMap = new Map();
  const usedChars = new Set();

  for (let i = 0; i < s.length; i++) {
    const char_s = s[i];
    const char_t = t[i];

    if (charMap.has(char_s)) {
      if (charMap.get(char_s) !== char_t) {
        return false;
      }
    } else {
      if (usedChars.has(char_t)) {
        return false;
      }
      charMap.set(char_s, char_t);
      usedChars.add(char_t);
    }
  }

  return true;
}

console.log(isIsomorphic("egg", "add")); // Output: true (e -> a, g -> d)
console.log(isIsomorphic("foo", "bar")); // Output: false (lengths are different)
console.log(isIsomorphic("paper", "title")); // Output: true (p -> t, a -> i, e -> l, r -> e)
console.log(isIsomorphic("ab", "aa")); // Output: false (b is mapped to two different characters)
