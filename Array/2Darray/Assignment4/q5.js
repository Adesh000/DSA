function arrangeCoins(n) {
  let left = 1;
  let right = n;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const totalCoins = (mid * (mid + 1)) / 2;

    if (totalCoins === n) {
      return mid; // Exact number of coins required for 'mid' rows, return 'mid'
    } else if (totalCoins < n) {
      left = mid + 1; // Increase the number of rows
    } else {
      right = mid - 1; // Decrease the number of rows
    }
  }

  return right; // Return the number of complete rows (right is the largest value where totalCoins is less than n)
}

console.log(arrangeCoins(5)); // Output: 2 (Two complete rows can be built with 5 coins)
console.log(arrangeCoins(8)); // Output: 3 (Three complete rows can be built with 8 coins)
console.log(arrangeCoins(10)); // Output: 4 (Four complete rows can be built with 10 coins)
