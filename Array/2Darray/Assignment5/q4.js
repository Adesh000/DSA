function findDistinctIntegers(nums1, nums2) {
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);

  const answer1 = [...set1].filter((num) => !set2.has(num));
  const answer2 = [...set2].filter((num) => !set1.has(num));

  return [answer1, answer2];
}

const nums1 = [1, 2, 2, 3, 4];
const nums2 = [2, 3, 5];

console.log(findDistinctIntegers(nums1, nums2));
// Output: [[1, 4], [5]] (Distinct integers in nums1 not present in nums2: [1, 4]. Distinct integers in nums2 not present in nums1: [5])
