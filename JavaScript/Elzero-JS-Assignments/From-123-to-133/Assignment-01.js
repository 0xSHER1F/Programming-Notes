let setOfNumbers = new Set([10]);
setOfNumbers.add(20).add(setOfNumbers.size);

console.log(setOfNumbers);
console.log(Array.from(setOfNumbers)[setOfNumbers.size - 1]);
