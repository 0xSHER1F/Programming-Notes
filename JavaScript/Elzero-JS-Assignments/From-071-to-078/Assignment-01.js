let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

let nameOnly = mix
  .map((ele) => {
    return typeof ele === "string" ? ele : "";
  })
  .reduce((acc, ele) => {
    return `${acc}${ele}`;
  });

console.log(nameOnly); // Elzero
