let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

let invertedNums = numsAndStrings
  .filter((ele) => {
    return !isNaN(ele);
  })
  .map((ele) => {
    return -ele;
  });

console.log(invertedNums); // [-1, -10, 10, 20, -5, -3]
