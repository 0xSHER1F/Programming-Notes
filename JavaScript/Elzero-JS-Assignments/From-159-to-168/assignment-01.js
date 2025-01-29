let currentDate = new Date();

let myBirthDate = new Date("Sep 11 2000");

let myAge = currentDate - myBirthDate;

console.log(`${(myAge / 1000).toFixed()} Seconds`);
console.log(`${(myAge / 1000 / 60).toFixed()} Minutes`);
console.log(`${(myAge / 1000 / 60 / 60).toFixed()} Hours`);
console.log(`${(myAge / 1000 / 60 / 60 / 24).toFixed()} Days`);
console.log(`${(myAge / 1000 / 60 / 60 / 24 / 30).toFixed()} Months`);
console.log(`${(myAge / 1000 / 60 / 60 / 24 / 30 / 12).toFixed()} Years`);
