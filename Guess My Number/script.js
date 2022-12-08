'use strict';

// console.log(document.querySelector('.message-in-head').textContent);
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector('.btncheck').addEventListener('click', function () {
  const guess = Number(document.querySelector('.check').value);

  if (!guess) {
    document.querySelector('.message-in-right').textContent = '🚫 No Number!';
  } else if (guess === secretNumber) {
    document.querySelector('.yourscore').textContent = highscore += score;
    document.querySelector('.message-in-right').textContent =
      '🎉 Correct Answer!';
    document.querySelector('body').style.backgroundColor = 'rgb(75, 187, 0)';
    document.querySelector('.number').style.backgroundColor =
      'rgb(92, 128, 245)';
    document.querySelector('.number').style.width = '400px';
    document.querySelector('.number').textContent = secretNumber;
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.health').textContent = score -= 1;
      document.querySelector('.message-in-right').textContent = '📈 Too High!';
    } else {
      document.querySelector('.message-in-right').textContent = '💥 You Loose!';
      document.querySelector('.health').textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.health').textContent = score -= 1;
      document.querySelector('.message-in-right').textContent = '📈 Too Low!';
    } else {
      document.querySelector('.message-in-right').textContent = '💥 You Loose!';
      document.querySelector('.health').textContent = 0;
    }
  }
});

// Coding Challenge #1

/* Implement a game rest functionality, so that the player can make a new guess!



Your tasks:
1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the 'score' and 'secretNumber' variables
3. Restore the initial conditions of the message, number, score and guess input fields
4. Also restore the original background color (#222) and number width (15rem)
*/

document.querySelector('.btnagain').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('body').style.backgroundColor = 'black';
  document.querySelector('.number').style.width = '100px';
  document.querySelector('.number').style.backgroundColor = 'black';
  document.querySelector('.message-in-right').textContent = 'Start Guessing...';
  document.querySelector('.health').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.check').value = '';
});

document.querySelector('.btnhs').addEventListener('click', function () {
  highscore = 0;
  document.querySelector('.yourscore').textContent = highscore;
});
