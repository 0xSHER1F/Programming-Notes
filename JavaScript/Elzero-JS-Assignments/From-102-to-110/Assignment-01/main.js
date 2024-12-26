let promptMessage = prompt("Print Number From – To", "Example: 5-20");

let promptNumbers = promptMessage.split("-").sort((a, b) => a - b);

for (let i = promptNumbers[0]; i <= promptNumbers[1]; i++) {
  let number = document.createElement("p");
  number.textContent = i;
  document.body.append(number);
}
