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

let scores, currentScore, activePlayer, isPlaying;

const init = function () {
  player1El.classList.remove('player--winner');
  player2El.classList.remove('player--winner');
  player1El.classList.add('player--active');
  player2El.classList.remove('player--active');

  diceImgEl.classList.add('hidden');

  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  isPlaying = true;

  score1El.textContent = scores[0];
  score2El.textContent = scores[1];
  currentScore1El.textContent = currentScore;
  currentScore2El.textContent = currentScore;
};

init();

const setCurrentScore = function (aScore) {
  document.getElementById(`current--${activePlayer}`).textContent = aScore;
};

const setScore = function (aScore) {
  document.getElementById(`score--${activePlayer}`).textContent = aScore;
};

const switchPlayer = function () {
  currentScore = 0;
  setCurrentScore(currentScore);

  activePlayer = activePlayer === 0 ? 1 : 0;

  player1El.classList.toggle('player--active');
  player2El.classList.toggle('player--active');
};

const getActivePlayer = function () {
  return document.querySelector(`.player--${activePlayer}`);
};

btnRollDiceEl.addEventListener('click', function () {
  if (isPlaying) {
    const dice = Math.trunc(6 * Math.random()) + 1;

    diceImgEl.src = `dice-${dice}.png`;
    diceImgEl.classList.remove('hidden');

    if (dice != 1) {
      currentScore += dice;
      setCurrentScore(currentScore);
    } else {
      switchPlayer();
    }
  }
});

btnHoldEl.addEventListener('click', function () {
  if (isPlaying) {
    scores[activePlayer] += currentScore;
    setScore(scores[activePlayer]);

    if (scores[activePlayer] >= 100) {
      isPlaying = false;

      const activePlayerEl = getActivePlayer();
      activePlayerEl.classList.add('player--winner');
      activePlayerEl.classList.remove('player--active');

      diceImgEl.classList.add('hidden');
    } else {
      switchPlayer();
    }
  }
});

btnNewGameEl.addEventListener('click', init);
