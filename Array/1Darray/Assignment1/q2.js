
function removeElement(nums, val) {
    let k = 0; 
    
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] !== val) {
        
        nums[k] = nums[i];
        k++;
      }
    }
    
    
    return k;
  }

  console.log(removeElement([2,3, 4, 5, 5, 1], 5))
  
  