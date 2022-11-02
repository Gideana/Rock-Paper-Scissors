//create function called 'getComputerChoice'
//randomly return either 'Rock', 'Paper' or 'Scissors'
//use this function to make the computer's play
//Tip: use the console to make sure this is returning the expected output before continuing

const results = document.querySelector('#Results');

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

//function getPlayerChoice () {
    //let selection = prompt('Please enter Rock, Paper or Scissors');
    //return(selection);
//}

let playerScore = 0;
let computerScore = 0;

let computerSelection = getComputerChoice();

const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
        button.addEventListener('click', function() {
            const playerSelection = button.className
            results.innerHTML='';
            function playSingleRound() {
            if (playerSelection === computerSelection) {
                playerScore ++;
                computerScore ++;
                const tie = document.createElement('div');
                tie.textContent = 'It\' a tie! ' + 'Player score is: ' + playerScore + ' Computer score is: ' + computerScore;
                results.appendChild(tie); 
                //return 'It\' a tie!' + playerScore + computerScore;
             } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
                 playerScore ++;
                 const winRS = document.createElement('div');
                 winRS.textContent = 'You win! ' + ' Rock beats Scissors ' + 'Player score is: ' + playerScore + ' Computer score is: ' + computerScore;
                 results.appendChild(winRS);
                 //return 'You win!' + ' Rock beats Scissors' + playerScore + computerScore;
             } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
                 playerScore ++; 
                 const winSP = document.createElement('div');
                 winSP.textContent = 'You win! ' + 'Scissors beats Paper ' + 'Player score is: ' + playerScore + ' Computer score is: ' + computerScore;
                 results.appendChild(winSP);
                 //return 'You win!' + ' Scissors beats Paper' + playerScore + computerScore;
             } else if (playerSelection === 'paper' && computerSelection === 'rock') {
                 playerScore ++; 
                 const winPR = document.createElement('div');
                 winPR.textContent = 'You win! ' + ' Paper beats Rock ' + 'Player score is: ' + playerScore + ' Computer score is: ' + computerScore;
                 results.appendChild(winPR);
                 //return 'You win!' + ' Paper beats Rock' + playerScore + computerScore;
             } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
                 computerScore ++;
                 const lossSR = document.createElement('div');
                 lossSR.textContent = 'You lose! ' + ' Rock beats Scissors ' + 'Player score is: ' + playerScore + ' Computer score is: ' + computerScore;
                 results.appendChild(lossSR);
                 //return 'You lose!' + ' Rock beats Scissors' + playerScore + computerScore;
             } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
                 computerScore ++;
                 const lossPS = document.createElement('div');
                 lossPS.textContent = 'You lose! ' + ' Scissors beats Paper ' + 'Player score is: ' + playerScore + ' Computer score is: ' + computerScore;
                 results.appendChild(lossPS);
                 //return 'You lose!' + ' Scissors beats Paper' + playerScore + computerScore;
             } else if (playerSelection === 'rock' && computerSelection === 'paper') {
                 computerScore ++;
                 const lossRP = document.createElement('div');
                 lossRP.textContent = 'You lose! ' + ' Paper beats Rock ' + 'Player score is: ' + playerScore + ' Computer score is: ' + computerScore;
                 results.appendChild(lossRP);
                 //return 'You lose!' + ' Paper beats Rock' + playerScore + computerScore;
             }  else {
                const errorMessage = document.createElement('div');
                 errorMessage.textContent = 'Error';
                 results.appendChild(errorMessage);
                 //return 'Error'
             }
            }
            return(playSingleRound())
        })
    }
)

//function playSingleRound() {
    //let playerSelection = getPlayerChoice();
    //playerSelection = playerSelection.toLowerCase();
    //if (playerSelection === computerSelection) {
       //playerScore ++;
       //computerScore ++;
        //return 'It\' a tie!' + playerScore + computerScore;
    //} else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        //playerScore ++;
        //return 'You win!' + ' Rock beats Scissors' + playerScore + computerScore;
    //} else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        //playerScore ++; 
        //return 'You win!' + ' Scissors beats Paper' + playerScore + computerScore;
    //} else if (playerSelection === 'paper' && computerSelection === 'rock') {
        //playerScore ++; 
        //return 'You win!' + ' Paper beats Rock' + playerScore + computerScore;
    //} else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        //computerScore ++;
        //return 'You lose!' + ' Rock beats Scissors' + playerScore + computerScore;
    //} else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        //computerScore ++;
        //return 'You lose!' + ' Scissors beats Paper' + playerScore + computerScore;
    //} else if (playerSelection === 'rock' && computerSelection === 'paper') {
        //computerScore ++;
        //return 'You lose!' + ' Paper beats Rock' + playerScore + computerScore;
    //}  else {
        //return 'Error'
    //}
//}

function playGame() {
    for (let i = 0; i < 1; i++) {
            console.log(playSingleRound())
    }
    if (i = 1) {
        if (playerScore > computerScore) {
            resetScore();
            return 'Game over! You win!'
        } else if (computerScore > playerScore) {
            resetScore();
            return 'Game over! You lose!'
        } else {
            resetScore();
            return 'Game over! It\'s a tie!'
        }

    }
}

function resetScore() {
    playerScore = 0;
    computerScore = 0;
}

//const buttons = document.querySelectorAll('button');
//buttons.forEach((button) => {
    //button.addEventListener('click', function() {
        //const playerSelection = button.className
        //return(playerSelection);
        //console.log(playSingleRound())
    //})
//});


    


