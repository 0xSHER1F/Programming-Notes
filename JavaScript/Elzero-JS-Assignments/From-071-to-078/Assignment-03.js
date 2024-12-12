let myArray = ["E", "l", "z", ["e", "r"], "o"];

let oneArray = myArray
  .join("")
  .split("")
  .filter((ele) => {
    return ele !== ",";
  })
  .reduce((acc, ele) => {
    return `${acc}${ele}`;
  });
console.log(oneArray); // Elzero
