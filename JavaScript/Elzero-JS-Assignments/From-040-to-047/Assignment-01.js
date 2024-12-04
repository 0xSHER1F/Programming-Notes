let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

// Method 1
console.log(myFriends.slice("", num)); // ['Ahmed', 'Elham', 'Osama']

// Method 2
console.log(myFriends.slice("", myFriends.length - true)); // ['Ahmed', 'Elham', 'Osama']

console.log(myFriends); // ['Ahmed', 'Elham', 'Osama', 'Gamal']

// Method 3

myFriends.pop();

console.log(myFriends); // ['Ahmed', 'Elham', 'Osama']

// Method 4

myFriends.push("Gamal");

console.log(myFriends); // ['Ahmed', 'Elham', 'Osama', 'Gamal']

myFriends.length = num;

console.log(myFriends); // ['Ahmed', 'Elham', 'Osama']
