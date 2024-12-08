function specialMix(...data) {
  let result = 0;
  let validNum = false;

  for (let i = 0; i < data.length; i++) {
    if (typeof data[i] === "number") {
      // If All Values Are Numbers
      result += data[i];
      validNum = true;
    } else {
      // If There is a Mixed String
      if (!isNaN(parseInt(data[i]))) {
        result += parseInt(data[i]);
        validNum = true;
      }
    }
  }

  return validNum ? result : "All Is Strings";
}

console.log(specialMix(10, 20, 30)); // 60
console.log(specialMix("10Test", "Testing", "20Cool")); // 30
console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
console.log(specialMix("Test", "Cool", "Test")); // All Is Strings
