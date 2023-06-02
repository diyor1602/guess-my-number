'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const body = document.querySelector('body');
const check = document.querySelector('.check');
const number = document.querySelector('.number');
const highScore = document.querySelector('.highscore');
const scoreDiv = document.querySelector('.score');
const again = document.querySelector('.again');
const guessInp = document.querySelector('.guess');

function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(guessInp.value);
  if (!guess) {
    displayMessage('⛔ No Number!');
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number');
    body.style.backgroundColor = '#60b347';
    number.style.width = '30rem';
    number.textContent = secretNumber;
    if (score > highscore) {
      highscore = score;
      highScore.textContent = highscore;
    }
  } else {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      scoreDiv.textContent = score;
    } else {
      displayMessage('💥 You lost the game!');
      scoreDiv.textContent = 0;
    }
  }
});

again.addEventListener('click', () => {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  displayMessage('Start guessing...');
  number.textContent = '?';
  scoreDiv.textContent = score;
  guessInp.value = '';
  body.style.backgroundColor = '#222';
  number.style.width = '15rem';
});
