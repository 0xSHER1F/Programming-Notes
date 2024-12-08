function getDetails(zName, zAge, zCountry) {
  function namePattern(zName) {
    let name = zName.split(" ");
    return `Hello ${name[0]} ${name[1][0].toUpperCase()}.`;
  }
  function ageWithMessage(zAge) {
    let age = zAge.split(" ");
    return `Your Age Is ${age[0]}`;
  }
  function countryTwoLetters(zCountry) {
    let countryCode = zCountry.slice(0, 2).toUpperCase();
    return `You Live In ${countryCode}`;
  }
  function fullDetails() {
    return `${namePattern(zName)}, ${ageWithMessage(zAge)}, ${countryTwoLetters(
      zCountry
    )}`;
  }
  return fullDetails();
}

console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
// Hello Osama M., Your Age Is 38, You Live In EG

console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
// Hello Ahmed A., Your Age Is 32, You Live In SY
