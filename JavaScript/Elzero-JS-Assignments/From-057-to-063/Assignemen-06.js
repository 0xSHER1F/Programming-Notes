function multiply(...numbers) {
  for (let i = 0; i < numbers.length; i++) {
    if (typeof numbers[i] !== "number") {
      continue;
    }
    result = parseInt(numbers[i]) * parseInt(numbers[i - 1]);
  }
  return console.log(result);
}

multiply(10, 20); // 200
multiply("A", 10, 30); // 300
multiply(100.5, 10, "B"); // 1000
