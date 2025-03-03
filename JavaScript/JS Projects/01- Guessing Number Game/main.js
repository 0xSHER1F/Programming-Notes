function generateRandomNumber() {
  return Math.trunc(Math.random() * 10 + 1);
}
let secretNum = generateRandomNumber();
let score = 10;
let highScore = 0;

// Handling Message
let handleMessage = function (message, color, bgColor) {
  document.querySelector(".message").textContent = message;
  document.querySelector(".message").style.cssText = `
    color: ${color};
    background-color: ${bgColor};
  `;
};
// Handling Losing
function lose() {
  handleMessage("No More Tries. You Lost !!", "white", "red");
  document.querySelector(".container").style.backgroundColor = "#ff6666";
  document.querySelector(".score span").textContent = 0;
}
document.querySelector(".check").addEventListener("click", handleGuess);

function handleGuess() {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    handleMessage("Please Enter a Valid Number!!", "black", "none");
  } else if (guess === secretNum) {
    win();
  } else {
    processWrongGuess(guess);
  }
}

// Handle Correct Guess
function win() {
  handleMessage("Correct Guess !! You Win", "white", "green");
  document.querySelector(".number").textContent = secretNum;
  document.querySelector(".container").style.backgroundColor = "#84f384";
  document.querySelector(".number").style.cssText =
    "background-color: green; width:180px";

  if (score > highScore) {
    highScore = score;
    document.querySelector(".highscore span").textContent = highScore;
  }
}

// Handling Wrong Guesses
function processWrongGuess(guess) {
  if (score > 1) {
    score--;
    document.querySelector(".score span").textContent = score;
    handleMessage(
      guess > secretNum ? "Wrong !! Higher" : "Wrong !! Lower",
      "white",
      "red"
    );
  } else {
    lose();
  }
}

// Game Reset
document.querySelector(".reset").addEventListener("click", () => {
  score = 10;
  secretNum = generateRandomNumber();
  document.querySelector(".guess").value = "";
  document.querySelector(".container").style.backgroundColor = "#eee";
  document.querySelector(".number").style.cssText =
    "background-color: #333; width:80px";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".score span").textContent = "10";
  handleMessage("Start Playing", "black", "none");
});
