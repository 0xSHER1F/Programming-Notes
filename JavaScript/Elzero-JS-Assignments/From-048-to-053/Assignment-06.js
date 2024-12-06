let start = 0;
let swappedName = "elZerO";

nameArray = swappedName.split("");
let resultOne = [];

for (let i = start; i < nameArray.length; i++) {
  if (nameArray[i] === nameArray[i].toUpperCase()) {
    resultOne.push(nameArray[i].toLowerCase());
  } else {
    resultOne.push(nameArray[i].toUpperCase());
  }
}

console.log(resultOne.join("")); // "ELzERo"

// Another Solution

let resultTwo = "";

for (let i = start; i < swappedName.length; i++) {
  if (swappedName[i] === swappedName[i].toUpperCase()) {
    resultTwo += swappedName[i].toLowerCase();
  } else {
    resultTwo += swappedName[i].toUpperCase();
  }
}

console.log(resultTwo);
