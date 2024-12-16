// program to rotate an array cyclically by one

const rotateCyclically = (arr) => {
  let lastEle = arr.pop();
  arr.unshift(lastEle);
  console.log("New array", arr);
};

rotateCyclically([2, 5, 7, 6, 5, 8]);
