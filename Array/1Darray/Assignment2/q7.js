function isMonotonic(nums) {
  let increasing = true;
  let decreasing = true;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < nums[i - 1]) {
      increasing = false; // If we find a decreasing pair, the array is not increasing
    }
    if (nums[i] > nums[i - 1]) {
      decreasing = false; // If we find an increasing pair, the array is not decreasing
    }
  }

  return increasing || decreasing; // Return true if the array is either increasing or decreasing
}

console.log(isMonotonic([1, 2, 2, 3])); // Output: true (Monotone increasing)
console.log(isMonotonic([6, 5, 4, 4])); // Output: true (Monotone decreasing)
console.log(isMonotonic([1, 3, 2])); // Output: false (Not monotonic)
