//a function that randomly returns either rock,paper or scissor
function computerPlay() {
    const computerChoice = Math.floor(Math.random() * 3) + 1;

    if (computerChoice === 1)
        return 'rock';
    else if (computerChoice === 2)
        return 'paper';
    else if (computerChoice === 3)
        return 'scissor';
}


function playRound(computerSelection, playerSelection) {
    if (computerSelection === playerSelection.toLowerCase())
        gameResult.textContent = 'Tie! ';

    else if (computerSelection === 'rock' && playerSelection.toLowerCase() === 'paper') {
        gameResult.textContent = 'You Win! Paper beats Rock.';
        playerScore++;
    } else if (computerSelection === 'rock' && playerSelection.toLowerCase() === 'scissor') {
        gameResult.textContent = 'You Lose! Rock beats Scissor.';
        computerScore++;
    } else if (computerSelection === 'paper' && playerSelection.toLowerCase() === 'rock') {
        gameResult.textContent = 'You Lose! Paper beats Rock.';
        computerScore++;
    } else if (computerSelection === 'paper' && playerSelection.toLowerCase() === 'scissor') {
        gameResult.textContent = 'You Win! Scissor beats Paper.';
        playerScore++;
    } else if (computerSelection === 'scissor' && playerSelection.toLowerCase() === 'paper') {
        gameResult.textContent = 'You Lose! Scissor beats Paper.';
        computerScore++;
    } else if (computerSelection === 'scissor' && playerSelection.toLowerCase() === 'rock') {
        gameResult.textContent = 'You Win! Rock beats Scissor.';
        playerScore++;
    }
}

function clearScore() {
    playerScore = 0;
    computerScore = 0;
}

function checkGameScore() {
    if (playerScore === 5) {
        winner.textContent = 'Congratulations!, You Won.';
        txtContainer.insertBefore(winner, txtContainer.firstChild);
        clearScore();
    } else if (computerScore === 5) {
        winner.textContent = 'Sorry, The Computer Won.';
        txtContainer.insertBefore(winner, txtContainer.firstChild);
        clearScore();
    }

}


const gameResult = document.createElement('div');
const gameScore = document.createElement('div');
const button = document.querySelectorAll('button:not(#reset)');
const txtContainer = document.querySelector('.txtContainer');
const winner = document.createElement('div');
winner.classList.add('winner');
var playerScore = 0;
var computerScore = 0;
button.forEach(btn => btn.addEventListener('click', (e) => {
    playRound(computerPlay(), e.target.id);
    txtContainer.appendChild(gameResult);
    gameScore.textContent = `Player: ${playerScore} , Computer: ${computerScore}`;
    txtContainer.appendChild(gameScore);
    checkGameScore();
}))