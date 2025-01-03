let chosen = 1;

let myFriends = [
  { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
  { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
  { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
];

const [firstFriend, secondFriend, thirdFriend] = myFriends;

let friendInfo = function (obj) {
  const {
    title,
    age,
    available,
    skills: [, skill],
  } = obj;

  console.log(title);
  console.log(age);
  console.log(available ? "Available" : "Not Available");
  console.log(skill);
};

switch (chosen) {
  case 1:
    friendInfo(firstFriend);
    break;
  case 2:
    friendInfo(secondFriend);
    break;
  case 3:
    friendInfo(thirdFriend);
    break;
  default:
    console.log("No Info To Show");
    break;
}
