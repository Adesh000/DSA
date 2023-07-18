function mergeSortedArrays(nums1, m, nums2, n) {
  let i = m - 1; // Pointer for nums1
  let j = n - 1; // Pointer for nums2
  let k = m + n - 1; // Pointer for the merged array

  while (j >= 0) {
    // Compare elements from both arrays and place the larger element at the end of nums1
    if (i >= 0 && nums1[i] > nums2[j]) {
      nums1[k] = nums1[i];
      i--;
    } else {
      nums1[k] = nums2[j];
      j--;
    }
    k--;
  }
}

// Example usage:
const nums1 = [1, 3, 5, 0, 0, 0];
const m = 3;
const nums2 = [2, 4, 6];
const n = 3;

mergeSortedArrays(nums1, m, nums2, n);
console.log(nums1); // Output: [1, 2, 3, 4, 5, 6]
