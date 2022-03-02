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
    else if (computerSelection === 'rock' && playerSelection.toLowerCase() === 'paper')
        gameResult.textContent = 'You Win! Paper beats Rock.';
    else if (computerSelection === 'rock' && playerSelection.toLowerCase() === 'scissor')
        gameResult.textContent = 'You Lose! Rock beats Scissor.';
    else if (computerSelection === 'paper' && playerSelection.toLowerCase() === 'rock')
        gameResult.textContent = 'You Lose! Paper beats Rock.';
    else if (computerSelection === 'paper' && playerSelection.toLowerCase() === 'scissor')
        gameResult.textContent = 'You Win! Scissor beats Paper.';
    else if (computerSelection === 'scissor' && playerSelection.toLowerCase() === 'paper')
        gameResult.textContent = 'You Lose! Scissor beats Paper.';
    else if (computerSelection === 'scissor' && playerSelection.toLowerCase() === 'rock')
        gameResult.textContent = 'You Win! Rock beats Scissor.';
}
const gameResult = document.createElement('div');
const gameScore = document.createElement('div');
const button = document.querySelectorAll('button');
button.forEach(btn => btn.addEventListener('click', function(e) {
    playRound(computerPlay(), e.target.id);
    btn.parentNode.appendChild(gameResult);
}))