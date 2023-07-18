function minAsciiDeleteSum(s1, s2) {
  const m = s1.length;
  const n = s2.length;

  // Create a 2D DP array to store the LCS lengths.
  const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

  // Fill the DP array.
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (s1[i - 1] === s2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + s1.charCodeAt(i - 1);
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  // Calculate the ASCII sum of deleted characters.
  let asciiSum = 0;
  for (let char of s1) {
    asciiSum += char.charCodeAt(0);
  }
  for (let char of s2) {
    asciiSum += char.charCodeAt(0);
  }

  return asciiSum - 2 * dp[m][n];
}

console.log(minAsciiDeleteSum("sea", "eat")); // Output: 231 (Delete 's' from s1 and 't' from s2)
console.log(minAsciiDeleteSum("delete", "leet")); // Output: 403 (Delete 'd', 'e', and 't' from s1)
