function minProductSum(nums1, nums2) {
  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => b - a);

  let minSum = 0;
  const n = nums1.length;

  for (let i = 0; i < n; i++) {
    minSum += nums1[i] * nums2[i];
  }

  return minSum;
}
const nums1 = [1, 2, 3, 4];
const nums2 = [5, 2, 3, 1];
console.log(minProductSum(nums1, nums2)); // Output: 22 (The minimum product sum is 1*5 + 2*2 + 3*3 + 4*1 = 22)
