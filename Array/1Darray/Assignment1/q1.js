

function twoSum(nums, target) {
    const numToIndexMap = {};
    
    for (let i = 0; i < nums.length; i++) {
      const complement = target - nums[i];
      
      if (complement in numToIndexMap) {
        return [numToIndexMap[complement], i];
      }
      
      numToIndexMap[nums[i]] = i;
    }
    
    return [];
  }

  console.log(twoSum([2, 6, 8, 1], 3))
  
  