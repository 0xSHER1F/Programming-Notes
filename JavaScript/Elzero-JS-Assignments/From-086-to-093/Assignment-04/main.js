let divOne = document.querySelector(".one");
let divTwo = document.querySelector(".two");

divOne.title = divTwo.title;
divTwo.title = divTwo.className;

let tempContent = divOne.innerHTML;

divOne.innerHTML = divTwo.innerHTML;

divTwo.innerHTML = `${tempContent} ${divTwo.attributes.length}`;
