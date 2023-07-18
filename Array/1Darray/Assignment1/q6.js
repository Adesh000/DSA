function containsDuplicate(nums) {
  const seen = new Set();

  for (const num of nums) {
    if (seen.has(num)) {
      return true; // Duplicate found
    }
    seen.add(num);
  }

  return false; // No duplicates found
}

console.log(containsDuplicate([1, 2, 3, 1])); // Output: true (1 appears twice)
console.log(containsDuplicate([1, 2, 3, 4])); // Output: false (No duplicates)
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])); // Output: true (1 and 3 appear multiple times)
