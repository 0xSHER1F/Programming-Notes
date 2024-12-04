let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

allArrs = allArrs
  .concat(arr1[arr1.length - true], arr2.slice(arr1.length - true))
  .sort()
  .join("")
  .toLowerCase();

console.log(allArrs); // fxy
