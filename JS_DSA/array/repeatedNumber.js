// find the duplicate number in the array

const repeatedNumber = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (i !== j && arr[i] === arr[j]) {
        return arr[i];
      }
    }
  }
};

console.log("Repeated Number", repeatedNumber([1, 4, 1, 7, 9, 6]));

const duplicateNumber = (arr) => {
  let obj = {};
  for (let i = 0; i <= arr.length - 1; i++) {
    if (obj.hasOwnProperty(arr[i])) {
      console.log("Duplicate element: ", arr[i]);
    } else {
      obj[arr[i]] = 1;
    }
  }
};

duplicateNumber([1, 3, 4, 2, 2]);

// To check wether the key is present in the obj or not

// 1.
let obj = {
  id: 1,
  name: "adesh",
};

const log1 = "id" in obj;
const log2 = "place" in obj;

console.log("Log one", log1);
console.log("Log two", log2);

// 2.
const output1 = obj.hasOwnProperty("name");

console.log("Output", output1);

//3.
const output2 = Object.keys(obj).includes("address");
const output3 = Object.keys(obj).includes("name");

console.log("Output 2: ", output2);
console.log("Output 3: ", output3);
