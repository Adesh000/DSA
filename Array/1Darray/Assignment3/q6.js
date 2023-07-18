function singleNumber(nums) {
    let result = 0;
    
    for (const num of nums) {
      result ^= num;
    }
    
    return result;
  }

  const nums = [4, 1, 2, 1, 2];
console.log(singleNumber(nums)); // Output: 4 (Only 4 appears once, others appear twice)
