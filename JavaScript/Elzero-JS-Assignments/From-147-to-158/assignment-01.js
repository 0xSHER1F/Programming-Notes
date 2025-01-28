/*
function Car(name, model, price) {
  this.n = name;
  this.m = model;
  this.p = price;
}
*/

class Car {
  constructor(name, model, price) {
    this.n = name;
    this.m = model;
    this.p = price;
  }

  run() {
    return "Car Is Running Now";
  }

  stop() {
    return "Car Is Stopped";
  }
}

let carOne = new Car("MG", "2022", 420000);
let carTwo = new Car("MS", "2022", 520000);
let carThree = new Car("Gs", "2024", 820000);

console.log(
  `Car One Name Is ${carOne.n} And Model Is ${carOne.m} And Price Is ${carOne.p}`
);

console.log(carOne.run());
