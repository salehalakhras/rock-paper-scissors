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
        return 'Tie! ';
    else if (computerSelection === 'rock' && playerSelection.toLowerCase() === 'paper')
        return 'You Win! Paper beats Rock.';
    else if (computerSelection === 'rock' && playerSelection.toLowerCase() === 'scissor')
        return 'You Lose! Rock beats Scissor.';
    else if (computerSelection === 'paper' && playerSelection.toLowerCase() === 'rock')
        return 'You Lose! Paper beats Rock.';
    else if (computerSelection === 'paper' && playerSelection.toLowerCase() === 'scissor')
        return 'You Win! Scissor beats Paper.'
    else if (computerSelection === 'scissor' && playerSelection.toLowerCase() === 'paper')
        return 'You Lose! Scissor beats Paper.';
    else if (computerSelection === 'scissor' && playerSelection.toLowerCase() === 'rock')
        return 'You Win! Rock beats Scissor.';
}


function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt();
        const computerSelection = computerPlay();
        const result = playRound(computerSelection, playerSelection);
        console.log(result);

        if (result[4] === 'W')
            playerScore++;
        else if (result[4] === 'L')
            computerScore++;

        console.log("Player Score: " + playerScore + "  Computer Score: " + computerScore);
    }

    if (playerScore > computerScore)
        console.log("Congratulations You Won!");
    else if (playerScore < computerScore)
        console.log('Sorry You Lost');
}

game();