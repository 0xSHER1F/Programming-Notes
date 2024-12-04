let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];

// Write One Single Line Of Code

finalArr = arrOne.concat(arrTwo).sort().reverse();

console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]

// Another Solution

finalArr = [];

finalArr = finalArr.concat(
  arrTwo[arrTwo.length - true],
  arrOne.reverse(),
  arrTwo.slice("", arrOne.length - true).reverse()
);

console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]
