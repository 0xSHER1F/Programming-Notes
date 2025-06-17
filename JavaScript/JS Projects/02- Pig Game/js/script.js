"use strict";

const players = document.querySelectorAll(".player");
const playerElement0 = document.querySelector(".player--0");
const playerElement1 = document.querySelector(".player--1");

const scoreElement0 = document.querySelector("#score--0");
const scoreElement1 = document.querySelector("#score--1");

const currentElement0 = document.querySelector("#current--0");
const currentElement1 = document.querySelector("#current--1");

const diceElement = document.querySelector(".dice");

const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

let scores, currentScore, activePlayer, isPlaying;

const gameInit = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  isPlaying = true;

  scoreElement0.textContent = 0;
  scoreElement1.textContent = 0;
  currentElement0.textContent = 0;
  currentElement1.textContent = 0;

  btnHold.style.cssText = "cursor: pointer;";
  btnRoll.style.cssText = "cursor: pointer;";
  diceElement.classList.add("hidden");
  players.forEach((player) => {
    player.classList.remove("player--winner");
  });
  playerElement0.classList.add("player--active");
};
gameInit();

const switchPlayer = function () {
  document.querySelector(`#current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  players.forEach((player) => {
    player.classList.toggle("player--active");
  });
};

btnRoll.addEventListener("click", function () {
  if (isPlaying) {
    let diceNumber = Math.trunc(Math.random() * 6) + 1;
    diceElement.src = `img/dice-${diceNumber}.png`;
    diceElement.classList.remove("hidden");

    if (diceNumber !== 1) {
      currentScore += Number(diceNumber);
      document.querySelector(`#current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener("click", function () {
  if (isPlaying) {
    scores[activePlayer] += currentScore;
    document.querySelector(`#score--${activePlayer}`).textContent =
      scores[activePlayer];
    if (scores[activePlayer] >= 30) {
      isPlaying = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
      diceElement.classList.add("hidden");
      btnHold.style.cssText = "cursor: not-allowed;";
      btnRoll.style.cssText = "cursor: not-allowed;";
    } else {
      switchPlayer();
    }
  }
});

btnNew.addEventListener("click", gameInit);
