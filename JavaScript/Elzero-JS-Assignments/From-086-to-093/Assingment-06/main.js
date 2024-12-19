let elementCount = document.querySelector("[name='elements']");
let elementContent = document.querySelector("[name='texts']");

let elementType = document.querySelector("select");

let mainDiv = document.querySelector(".results");

mainDiv.style =
  "width:100%;display:flex; flex-flow: row wrap; justify-content: space-between;padding : 30px";

document.forms[0].style =
  "margin: 20px auto; display: flex; flex-flow: column; gap: 20px; align-items:center";

document.querySelector("[type='submit']").style.cssText =
  "width: 40%; background-color: #009688; color: white; cursor: pointer; padding: 10px; border: 1px solid #eee; border-radius: 10px;";

document
  .querySelectorAll(".input, select")
  .forEach(
    (input) =>
      (input.style.cssText =
        "width: 40%;padding: 10px; border: 1px solid #eee; border-radius: 10px;")
  );

document.forms[0].onsubmit = function (event) {
  event.preventDefault();
  document.querySelectorAll(".box").forEach((ele) => ele.remove());

  for (let i = 1; i <= elementCount.value; i++) {
    let newElement = document.createElement(elementType.value);
    let elementText = document.createTextNode(elementContent.value);

    if (
      elementContent.value.trim() === "" ||
      elementContent.value.trim() === " "
    ) {
      break;
    }

    newElement.className = "box";
    newElement.title = "Element";
    newElement.id = `id-${i}`;

    newElement.style =
      "width:calc(33% - 10px) ; background-color: orangered; border-radius: 10px; color: white; text-align: center; padding: 10px; margin-bottom:20px";

    newElement.appendChild(elementText);

    mainDiv.appendChild(newElement);
  }
};
