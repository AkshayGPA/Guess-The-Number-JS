'use strict';

let number =  Math.trunc(Math.random() * 20) + 1;
// document.querySelector('.number').textContent = number;

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
        document.querySelector('.number').textContent = number;

        // Implementing the background color change and widening of the number box
        // Don't forget to add quotes adound the value of the attribute
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
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
            document.querySelector('.message').textContent = `Too Low!`;
            score--;
            document.querySelector('.score').textContent = score;
        }
        else {
            document.querySelector('.message').textContent = `You lost the game 🙅🏼‍♂️`;
            document.querySelector('.score').textContent = 0;
            console.log('Sorry, you lost the game.');
        }
    }

    /**
     * Note:
     * * Adding "again" button functionality for the coding challenge.
     * * Used better comments style.
     */

    const startAgain = document.querySelector('.again');
    startAgain.addEventListener('click', function() {
        score = 20;
        number =  Math.trunc(Math.random() * 20) + 1;
        document.querySelector('.number').textContent = '?';
        document.querySelector('.guess').value = '';
        // console.log(typeof(document.querySelector('.guess').value));
        document.querySelector('.message').textContent = 'Start guessing...';
        document.querySelector('.score').textContent = 20;
        document.querySelector('body').style.backgroundColor = '#222';
        document.querySelector('.number').style.width = '15rem';
    })

});

