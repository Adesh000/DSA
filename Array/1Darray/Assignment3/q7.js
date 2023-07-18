function findMissingRanges(nums, lower, upper) {
  const result = [];
  let missingFrom = lower;

  for (const num of nums) {
    if (num === missingFrom) {
      missingFrom++;
    } else if (num > missingFrom) {
      result.push(getRange(missingFrom, num - 1));
      missingFrom = num + 1;
    }
  }

  if (missingFrom <= upper) {
    result.push(getRange(missingFrom, upper));
  }

  return result;
}

function getRange(start, end) {
  return start === end ? start.toString() : start + "->" + end;
}

const nums = [0, 1, 3, 50, 75];
const lower = 0;
const upper = 99;
console.log(findMissingRanges(nums, lower, upper));
// Output: ["2", "4->49", "51->74", "76->99"]
