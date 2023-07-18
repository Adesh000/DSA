function canPlaceFlowers(flowerbed, n) {
  let count = 0; // Count of newly planted flowers

  for (let i = 0; i < flowerbed.length; i++) {
    if (flowerbed[i] === 0) {
      // Check if the current and adjacent plots are empty
      const prevIsEmpty = i === 0 || flowerbed[i - 1] === 0;
      const nextIsEmpty = i === flowerbed.length - 1 || flowerbed[i + 1] === 0;

      if (prevIsEmpty && nextIsEmpty) {
        // Plant a flower at the current plot
        flowerbed[i] = 1;
        count++;
      }
    }
  }

  return count >= n; // Return true if we can plant n new flowers, false otherwise
}

const flowerbed = [1, 0, 0, 0, 1];
const n = 1;
console.log(canPlaceFlowers(flowerbed, n)); // Output: true (One flower can be planted at index 2)

const flowerbed2 = [1, 0, 0, 0, 1];
const n2 = 2;
console.log(canPlaceFlowers(flowerbed2, n2)); // Output: false (Only one empty plot in between two 1's)
