let fontFamily = document.querySelector("#fonts");
let fontSize = document.querySelector("#font-size");
let fontColor = document.querySelector("#colors");

fontFamily.onchange = function () {
  localStorage.setItem("Font-Family", fontFamily.value);
  document.body.style.fontFamily = fontFamily.value;
};
fontSize.onchange = function () {
  localStorage.setItem("Font-Size", fontSize.value);
  document.body.style.fontSize = fontSize.value;
};
fontColor.onchange = function () {
  localStorage.setItem("Font-Color", fontColor.value);
  document.body.style.color = fontColor.value;
};

document.body.style.fontFamily = localStorage.getItem("Font-Family");
document.body.style.fontSize = localStorage.getItem("Font-Size");
document.body.style.color = localStorage.getItem("Font-Color");

fontFamily.value = localStorage.getItem("Font-Family");

fontSize.value = localStorage.getItem("Font-Size");

fontColor.value = localStorage.getItem("Font-Color");
