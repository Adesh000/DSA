function nextPermutation(nums) {
  let i = nums.length - 2;

  // Find the first element from the right that is smaller than its right neighbor
  while (i >= 0 && nums[i] >= nums[i + 1]) {
    i--;
  }

  if (i >= 0) {
    // Find the smallest element to the right of nums[i] that is greater than nums[i]
    let j = nums.length - 1;
    while (j >= 0 && nums[j] <= nums[i]) {
      j--;
    }
    // Swap nums[i] and nums[j]
    [nums[i], nums[j]] = [nums[j], nums[i]];
  }

  // Reverse the subarray from i+1 to the end of the array
  let left = i + 1;
  let right = nums.length - 1;
  while (left < right) {
    [nums[left], nums[right]] = [nums[right], nums[left]];
    left++;
    right--;
  }
}

const nums1 = [1, 2, 3];
nextPermutation(nums1);
console.log(nums1); // Output: [1, 3, 2]

const nums2 = [3, 2, 1];
nextPermutation(nums2);
console.log(nums2); // Output: [1, 2, 3]

const nums3 = [1, 1, 5];
nextPermutation(nums3);
console.log(nums3); // Output: [1, 5, 1]
