let inputOne = document.querySelector("input[type='text']");
let inputTwo = document.querySelector("input[type='password']");
let inputThree = document.querySelector("input[type='email']");

let selectBox = document.querySelector("#select-box");

inputOne.oninput = function () {
  sessionStorage.setItem("Input-One", inputOne.value);
};
inputTwo.oninput = function () {
  sessionStorage.setItem("Input-Two", inputTwo.value);
};
inputThree.oninput = function () {
  sessionStorage.setItem("Input-Three", inputThree.value);
};
selectBox.onchange = function () {
  sessionStorage.setItem("Select-Box", selectBox.value);
};

inputOne.value = sessionStorage.getItem("Input-One");
inputTwo.value = sessionStorage.getItem("Input-Two");
inputThree.value = sessionStorage.getItem("Input-Three");

if (sessionStorage.getItem("Select-Box")) {
  selectBox.value = sessionStorage.getItem("Select-Box");
}
