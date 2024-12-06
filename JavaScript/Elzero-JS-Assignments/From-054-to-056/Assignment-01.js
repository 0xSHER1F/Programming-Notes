let friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany", "Sherif"];
let index = 0;
let counter = 0;

for (let i = index; i < friends.length; i++) {
  if (typeof friends[i] === "number" || friends[i].startsWith("A")) {
    continue;
  }
  console.log(`("${counter + +true} => ${friends[i]}")`);
  counter++;
}

/* 
Output
("1 => Sayed")
("2 => Mahmoud")
("3 => Sherif")
*/
