let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
};

updateScoreElement();

function playGame(playerMove) {
    const computerMove = pickComputerMove();

    let result = '';

if (playerMove === 'scissors') {
if (computerMove === 'rock') {
  result = 'DYU Losses: Kiss me.';
} else if (computerMove === 'paper') {
  result = 'DYU Wins: Hug me.';
} else if (computerMove === 'scissors') {
  result = 'Ties: Time to party.';
}

} else if (playerMove === 'paper') {
if (computerMove === 'rock') {
  result = 'DYU Wins: Hug me.';
} else if (computerMove === 'paper') {
  result = 'Ties: Time to party.';
} else if (computerMove === 'scissors') {
  result = 'DYU Losses: Kiss me.';
}

} else if (playerMove === 'rock') {
if (computerMove === 'rock') {
  result = 'Ties: Time to party.';
} else if (computerMove === 'paper') {
  result = 'DYU Losses: Kiss me.';
} else if (computerMove === 'scissors') {
  result = 'DYU Wins: Hug me.';
}
}

if(result === 'DYU Wins: Hug me.') {
 score.wins += 1;
} else if (result === 'DYU Losses: Kiss me.') {
 score.losses += 1;
} else if (result === 'Ties: Time to party.') {
score.ties += 1;
}

localStorage.setItem('score', JSON.stringify(score));

updateScoreElement();

document.querySelector('.js-result').innerHTML = result;

document.querySelector('.js-moves').innerHTML = `EDave
<img src="gameimage/${playerMove}-emoji.jpg" class="move-icon">
<img src="gameimage/${computerMove}-emoji.jpg" class="move-icon">
JJ`;
}

function updateScoreElement() {
    document.querySelector('.js-score').innerHTML 
    = `Kiss me: ${score.losses}, Hug me: ${score.wins}, Time to party: ${score.ties}`
}

function pickComputerMove() {
const randomNumber = Math.random();

let computerMove = '';

if (randomNumber >= 0 && randomNumber < 1 / 3) {
  computerMove = 'rock';
} else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
  computerMove = 'paper';
} else if (randomNumber >= 2 / 3 && randomNumber < 1) {
  computerMove = 'scissors';
}

return computerMove;
}