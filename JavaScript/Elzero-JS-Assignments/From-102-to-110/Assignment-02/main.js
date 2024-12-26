let mainDiv = document.createElement("div");
mainDiv.style.cssText = `
    width: 400px;
    padding: 20px;
    text-align: center;
    background-color: #EEE;
    border: 1px solid #DDD;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    `;
let header = document.createElement("h3");
header.textContent = "Welcome";
let paragraph = document.createElement("p");
paragraph.textContent = "Welcome to Elzero Web School";
let btn = document.createElement("button");
btn.textContent = "X";
btn.style.cssText = `
    width: 30px;
    height: 30px;
    border-radius: 50%;
    position: absolute;
    top: -15px;
    right: -15px;
    background-color: red;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    border: none;
    cursor: pointer;
  `;

btn.addEventListener("click", () => {
  mainDiv.remove();
});

function popUp() {
  mainDiv.appendChild(btn);
  mainDiv.appendChild(header);
  mainDiv.appendChild(paragraph);
  document.body.appendChild(mainDiv);
}

window.addEventListener("load", () => {
  setTimeout(popUp, 5000);
});
