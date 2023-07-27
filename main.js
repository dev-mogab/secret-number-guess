// Variables
let hint = document.querySelector('.hint1');
let guessNum = document.querySelector('.num-guess');
let tries = document.querySelector('.tries');
let btn = document.querySelector('#btn');
let retry = document.querySelector('#retry');
let randomNum = generateRandomNumber();
let totalTries = 10;
let highScore = 0;

// Event Listeners
btn.addEventListener('click', handleGuess);
retry.addEventListener('click', resetGame);

// Function to handle the guess
function handleGuess(e) {
  e.preventDefault();
  let playerNum = Number(document.getElementById('playerNum').value);

  if (!playerNum) {
    displayMessage(hint, 'Insert a Number');
  } else if (playerNum === randomNum) {
    handleWin(playerNum);
  } else {
    handleIncorrectGuess(playerNum);
  }
}

// Function to handle a correct guess
function handleWin() {
  displayMessage(hint, 'You are the chicken winner! 🐔🏆');
  displayMessage(guessNum, randomNum);
  document.body.style.backgroundColor = '#4BC848';

  if (totalTries > highScore) {
    highScore = totalTries;
    updateHighScore();
  }
}

// Function to handle an incorrect guess
function handleIncorrectGuess(playerNum) {
  if (totalTries > 1) {
    displayMessage(hint, playerNum > randomNum ? 'Too high 📈' : 'Too low 📉');
    totalTries--;
    displayMessage(tries, totalTries);
  } else {
    handleLoss();
  }
}

// Function to handle a loss
function handleLoss() {
  displayMessage(hint, 'Better luck next time! 💣');
  displayMessage(tries, 0);
  document.body.style.backgroundColor = '#C84E48';
  displayMessage(guessNum, randomNum);
}

// Function to reset the game
function resetGame() {
  randomNum = generateRandomNumber();
  totalTries = 10;
  displayMessage(tries, totalTries);
  displayMessage(hint, 'Between 1 - 20');
  displayMessage(guessNum, '?');
  document.body.style.backgroundColor = '#7F7F7F';
}

// Function to generate a random number between 1 and 20
function generateRandomNumber() {
  return Math.trunc(Math.random() * 20 + 1);
}

// Function to display a message in a given node
function displayMessage(node, message) {
  node.textContent = message;
}

// Function to update the high score
function updateHighScore() {
  document.querySelector('.hs').textContent = highScore;
}
