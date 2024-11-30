let a = 21;
let b = 20;
let c = `${a}${b}`.length;

console.log("_" + `${a}_${b}`.repeat(c) + "_"); // _21_2021_2021_2021_20_

/* Another Solution */

console.log("_" + `${a}_${b}`.repeat(4) + "_"); // _21_2021_2021_2021_20_
