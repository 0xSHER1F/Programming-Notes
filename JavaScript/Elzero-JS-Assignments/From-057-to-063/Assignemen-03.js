function ageInTime(theAge) {
  if (theAge > 100 || theAge < 10) {
    return console.log("Age Out Of Range");
  }
  console.log(`You Are Age in Months Is: ${theAge * 12} Months`);
  console.log(`You Are Age in Weeks Is: ${theAge * 12 * 4} Weeks`);
  console.log(`You Are Age in Days Is: ${theAge * 12 * 4 * 7} Days`);
  console.log(`You Are Age in Hours Is: ${theAge * 12 * 4 * 7 * 24} Hours`);
  console.log(
    `You Are Age in Minutes Is: ${theAge * 12 * 4 * 7 * 24 * 60} Minutes`
  );
  console.log(
    `You Are Age in Seconds Is: ${theAge * 12 * 4 * 7 * 24 * 60 * 60} Seconds`
  );
}

// Needed Output
ageInTime(110); // Age Out Of Range
ageInTime(38); // Months Example => 456 Months
