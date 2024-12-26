let myDiv = document.createElement("div");
myDiv.style.cssText = `
        width: 200px;
        height: 200px;
        font-size: 5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #EEE;
        border: 2px solid #333;
        border-radius: 50px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        cursor: pointer;
    `;

myDiv.innerHTML = 10;

document.body.appendChild(myDiv);

let timer = setInterval(() => {
  if (myDiv.innerHTML == "5") {
    clearInterval(timer);
    location.href = "https://elzero.org/";
  } else {
    myDiv.innerHTML -= 1;
  }
}, 1000);
