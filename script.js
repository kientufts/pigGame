'use strict';

const score1El = document.getElementById('score--0');
const score2El = document.getElementById('score--1');
const currentScore1El = document.getElementById('current--0');
const currentScore2El = document.getElementById('current--1');

const diceImgEl = document.querySelector('.dice');

const btnRollDiceEl = document.querySelector('.btn--roll');
const btnNewGameEl = document.querySelector('.btn--new');
const btnHoldEl = document.querySelector('.btn--hold');

let currentScore = 0;

score1El.textContent = 0;
score2El.textContent = 0;

diceImgEl.classList.add('hidden');

btnRollDiceEl.addEventListener('click', function () {
  const dice = Math.trunc(6 * Math.random()) + 1;

  diceImgEl.src = `dice-${dice}.png`;
  diceImgEl.classList.remove('hidden');

  if (dice != 1) {
    currentScore += dice;
    currentScore1El.textContent = currentScore; // FIXME: Add to correc current player
  }

  //3. Check if rolled 1: if true, switch player
  //4. If false, add dice number to the current score
});
