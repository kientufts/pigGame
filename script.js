'use strict';

const player1El = document.querySelector('.player--0');
const player2El = document.querySelector('.player--1');
const score1El = document.getElementById('score--0');
const score2El = document.getElementById('score--1');
const currentScore1El = document.getElementById('current--0');
const currentScore2El = document.getElementById('current--1');

const diceImgEl = document.querySelector('.dice');

const btnRollDiceEl = document.querySelector('.btn--roll');
const btnNewGameEl = document.querySelector('.btn--new');
const btnHoldEl = document.querySelector('.btn--hold');

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

score1El.textContent = scores[0];
score2El.textContent = scores[1];

diceImgEl.classList.add('hidden');

const setCurrentScore = function (aScore) {
  document.getElementById(`current--${activePlayer}`).textContent = aScore;
};

btnRollDiceEl.addEventListener('click', function () {
  const dice = Math.trunc(6 * Math.random()) + 1;

  diceImgEl.src = `dice-${dice}.png`;
  diceImgEl.classList.remove('hidden');

  if (dice != 1) {
    currentScore += dice;
    setCurrentScore(currentScore);
  } else {
    currentScore = 0;
    setCurrentScore(currentScore);

    activePlayer = activePlayer === 0 ? 1 : 0;

    player1El.classList.toggle('player--active');
    player2El.classList.toggle('player--active');
  }
});
