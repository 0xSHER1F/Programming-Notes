let num = 3;

// Solution One
console.log(num + num); // 6

// Solution Two
console.log(num * --num); // 6

// Soultion Three
console.log(num++ * num); // 6

// Soultion Four
console.log(num ** num / num - num); // 6

// Solution Five
console.log((++num * --num) / --num); // 6

// Solution Six
console.log(num ** (num ** num) / num - num); // 6

console.log("*******************");

var x = 3;
console.log(x + x); // 3 + 3 = 6

var x = 3;
console.log(x ** --x - ++x); // (3 ^ 2) - 3 = 6

var x = 3;
console.log(x * x - x); // 9 - 3 = 6
