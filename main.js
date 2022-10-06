//create function called 'getComputerChoice'
//randomly return either 'Rock', 'Paper' or 'Scissors'
//use this function to make the computer's play
//Tip: use the console to make sure this is returning the expected output before continuing

function getComputerChoice() {
let textArray = [
    'rock',
    'paper',
    'scissors'
];
let randomText = Math.floor(Math.random()*textArray.length);
let randomOutput = textArray[randomText];
return(randomOutput);
}

//write function that plays single round of Rock Paper Scissors
//should have two parameters - 'playerSelection' and 'computerSelection'
//return a string the winner of the round like so: 'You Lose! Paper beats Rock'
//make the functions playerSelection case-insensitive

function player () {
    let Selection = prompt('Please enter Rock, Paper or Scissors');
    return(Selection);
}

let playerScore = 0;
let computerScore = 0;

function singleRound() {
    let playerSelection = player();
    playerSelection = playerSelection.toLowerCase();
    let computerSelection = getComputerChoice();
    if (playerSelection === computerSelection) {
       playerScore ++;
       computerScore ++;
        return 'It\' a tie!' + playerScore + computerScore;
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        playerScore ++;
        return 'You win!' + ' Rock beats Scissors' + playerScore + computerScore;
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore ++; 
        return 'You win!' + ' Scissors beats Paper' + playerScore + computerScore;
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerScore ++; 
        return 'You win!' + ' Paper beats Rock' + playerScore + computerScore;
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        computerScore ++;
        return 'You lose!' + ' Rock beats Scissors' + playerScore + computerScore;
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        computerScore ++;
        return 'You lose!' + ' Scissors beats Paper' + playerScore + computerScore;
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        computerScore ++;
        return 'You lose!' + ' Paper beats Rock' + playerScore + computerScore;
    }  else {
        return 'Error'
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
            console.log(singleRound())
    }
    if (i = 5) {
        if (playerScore > computerScore) {
            reset();
            return 'Game over! You win!'
        } else if (computerScore > playerScore) {
            reset();
            return 'Game over! You lose!'
        } else {
            reset();
            return 'Game over! It\'s a tie!'
        }

    }
}

function reset() {
    playerScore = 0;
    computerScore = 0;
}
