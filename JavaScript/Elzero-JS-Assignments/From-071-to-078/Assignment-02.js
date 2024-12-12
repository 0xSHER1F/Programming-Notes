let myString = "EElllzzzzzzzeroo";

let nonRepeated = myString
  .split("")
  .filter((ele, i) => {
    return myString.indexOf(ele) === i;
  })
  .join("");

console.log(nonRepeated); //Elzero
