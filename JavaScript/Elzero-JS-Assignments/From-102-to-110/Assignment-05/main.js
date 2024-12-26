let myDiv = document.createElement("div");

myDiv.innerHTML = 10;

document.body.appendChild(myDiv);

let timer = setInterval(() => {
  myDiv.innerHTML -= 1;
  if (myDiv.innerHTML == "5") {
    window.open(
      "https://elzero.org/",
      "_blank",
      "width=600, height=700, top=100, left= 500"
    );
  } else if (myDiv.innerHTML == "0") {
    clearInterval(timer);
  }
}, 1000);
