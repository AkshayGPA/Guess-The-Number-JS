'use strict';
/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = `Correct Number`;

console.log(
  (document.querySelector('.message').textContent = `Correct Number`)
);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 17;
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

const number =  Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = number;

let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number((document.querySelector('.guess').value));
    console.log(guess, typeof guess);

    // When there is no input
    if (!guess) {
        document.querySelector('.message').textContent = '⛔ No number selected';
    }

    // When player wins
    else if (guess === number) {
        document.querySelector('.message').textContent = `Correct Number`;
        highscore = Math.max(highscore, score);
        document.querySelector('.highscore').textContent = highscore;
    }

    // When player guess is larger than number
    else if (guess > number) {
        if (score > 1) {
            document.querySelector('.message').textContent = `Too High!`;
            score--;
            document.querySelector('.score').textContent = score;
        }
        else {
            document.querySelector('.message').textContent = `You lost the game 🙅🏼‍♂️`;
            document.querySelector('.score').textContent = 0;
            console.log('Sorry, you lost the game.');
        }
    }

    // When player guess is lesser than number
    else if (guess < number) {
        if (score > 1) {
            document.querySelector('.message').textContent = `Too High!`;
            score--;
            document.querySelector('.score').textContent = score;
        }
        else {
            document.querySelector('.message').textContent = `You lost the game 🙅🏼‍♂️`;
            document.querySelector('.score').textContent = 0;
            console.log('Sorry, you lost the game.');
        }
    }
});

