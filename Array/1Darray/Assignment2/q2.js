function maxNumberOfTypes(candyType) {
  const uniqueCandies = new Set(candyType); // Using Set to get unique candy types

  const maxUniqueCandies = candyType.length / 2;
  const actualUniqueCandies = uniqueCandies.size;

  return Math.min(actualUniqueCandies, maxUniqueCandies);
}

const candyType = [1, 1, 2, 2, 3, 3]; // Alice can eat 3 different types of candies (1, 2, 3)
console.log(maxNumberOfTypes(candyType)); // Output: 3
