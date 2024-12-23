// find min number of jumps to reach at the end of the array

const minJumps = (arr) => {
  let i = 0;
  let jump = 0;
  while (i < arr.length - 1) {
    if (arr[i] <= 0) {
      return -1;
    }
    jump++;
    i = i + arr[i];
  }
  return jump;
};

console.log("Min num of jumps", minJumps([0, 10, 20]));
