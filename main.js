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

//let playerSelection = 'Rock';
//let playerSelection = parseInt(prompt('Please enter Rock, Paper or Scissors'));
const computerSelection = getComputerChoice();

function player () {
    let Selection = prompt('Please enter Rock, Paper or Scissors');
    return(Selection);
}

let playerSelection = player();
//playerSelection = playerSelection.toLowerCase;

function singleRound() {
    if (playerSelection === computerSelection) {
        return 'It\' a tie!';
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return 'You win! Rock beats Scissors';
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return 'You win! Scissors beats Paper';
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return 'You win! Paper beats Rock';
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return 'You lose! Rock beats Scissors';
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        return 'You lose! Scissors beats Paper';
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        return 'You lose! Paper beats Rock';
    }  else {
        return 'Error'
    }
}

