type custom = "Yes" | "No";

function isHeOld(age: number): custom {
  return age > 40 ? "Yes" : "No";
}

// Do Not Edit Here
console.log(isHeOld("100")); // Error
console.log(isHeOld(45)); // "Yes"
console.log(isHeOld(30)); // "No"
