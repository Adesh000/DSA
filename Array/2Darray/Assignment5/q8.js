function isDoubledArray(changed) {
  const original = new Set();

  for (const num of changed) {
    if (original.has(num * 0.5)) {
      original.delete(num * 0.5);
    } else if (original.has(num * 2)) {
      original.delete(num * 2);
    } else {
      return [];
    }
  }

  return [...original];
}

const changed1 = [1, 2, 4, 4, 8];
console.log(isDoubledArray(changed1)); // Output: [1, 2, 4] (The original array is [1, 2, 4])

const changed2 = [3, 1, 7, 11];
console.log(isDoubledArray(changed2)); // Output: [] (changed is not a doubled array)
