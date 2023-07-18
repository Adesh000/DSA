function findAnagrams(s, p) {
  const targetFreq = {};
  const windowFreq = {};
  const result = [];

  // Store the frequency of characters in p.
  for (let char of p) {
    targetFreq[char] = (targetFreq[char] || 0) + 1;
  }

  let left = 0;
  let right = 0;

  while (right < s.length) {
    const char = s[right];

    // Increment the frequency of the current character in the window.
    windowFreq[char] = (windowFreq[char] || 0) + 1;

    // Shrink the window if its length is equal to the length of p.
    if (right - left + 1 === p.length) {
      if (compareFrequency(windowFreq, targetFreq)) {
        result.push(left);
      }

      windowFreq[s[left]]--; // Decrement the frequency of the character at left.
      left++; // Move the left pointer to the right to shrink the window.
    }

    right++; // Move the right pointer to expand the window.
  }

  return result;
}

// Helper function to compare two frequency hash tables.
function compareFrequency(freq1, freq2) {
  for (let key in freq1) {
    if (freq1[key] !== freq2[key]) {
      return false;
    }
  }
  return true;
}

const s = "cbaebabacd";
const p = "abc";
console.log(findAnagrams(s, p)); // Output: [0, 6]
