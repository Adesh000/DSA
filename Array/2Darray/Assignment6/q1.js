function reconstructPermutation(s) {
  const n = s.length;
  let min = 0;
  let max = n;
  const perm = [];

  for (let i = 0; i <= n; i++) {
    if (s[i] === "I") {
      perm.push(min);
      min++;
    } else {
      perm.push(max);
      max--;
    }
  }

  return perm;
}

const s = "IDID";
console.log(reconstructPermutation(s)); // Output: [0, 4, 1, 3, 2] (A possible valid permutation)
