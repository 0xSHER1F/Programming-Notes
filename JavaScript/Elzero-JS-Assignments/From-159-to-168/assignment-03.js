let date = new Date();

let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

date.setDate(0);

console.log(date);

console.log(
  `Previous Month Is ${
    months[date.getMonth()]
  } And Last Day Is ${date.getDate()}`
);
