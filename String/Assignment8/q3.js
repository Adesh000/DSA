function minDistance(word1, word2) {
  const m = word1.length;
  const n = word2.length;

  // Create a 2D DP array.
  const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

  // Fill the base cases.
  for (let i = 1; i <= m; i++) {
    dp[i][0] = i;
  }
  for (let j = 1; j <= n; j++) {
    dp[0][j] = j;
  }

  // Fill the DP array using the recurrence relation.
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (word1[i - 1] === word2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = 1 + Math.min(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  return dp[m][n];
}

console.log(minDistance("sea", "eat")); // Output: 2 (Delete 's' and 't' from word1 and word2)
console.log(minDistance("delete", "leet")); // Output: 3 (Delete 'd', 'e', and 't' from word1)
