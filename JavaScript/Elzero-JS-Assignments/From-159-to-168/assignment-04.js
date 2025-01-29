let dateOne = new Date("Sep 11 2000");
let dateTwo = new Date(2000, 8, 11, 0, 0, 0);

let dateThree = new Date();
dateThree.setFullYear(2000, 8, 11);
dateThree.setHours(0);
dateThree.setMinutes(0);
dateThree.setSeconds(0);

console.log(dateOne);
console.log(dateTwo);
console.log(dateThree);
