let charsOne = ["A", "B", "C", "D", "E", 10, 15, 6];
let charsTwo = ["A", "B", "C", 20, "D", "E", 10, 15, 6];
let charsThree = ["Z", "Y", "A", "D", "E", 10, 1];

function filterArray(arr) {
  let numbers = arr.filter((ele) => typeof ele === "number");
  let letters = arr.filter((ele) => typeof ele === "string");

  arr = [...numbers, ...letters];

  arr.copyWithin(0, numbers.length, numbers.length + numbers.length);

  return arr;
}

console.log(filterArray(charsOne));
console.log(filterArray(charsTwo));
console.log(filterArray(charsThree));
