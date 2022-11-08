const results = document.querySelector('#Results');
const Number_Of_Rounds = document.querySelector('#Number_Of_Rounds');
const endResults = document.querySelector('#End_Result');

function getComputerChoice() {
let textArray = [
    'Rock',
    'Paper',
    'Scissors'
];
let randomText = Math.floor(Math.random()*textArray.length);
let randomOutput = textArray[randomText];
return(randomOutput);
}

let playerScore = 0;
let computerScore = 0;
let numberOfRounds = 0;

const rounds = document.createElement('p');
const tie = document.createElement('div');
const win = document.createElement('div');
const loss = document.createElement('div');

const buttons = document.querySelectorAll('img');
    buttons.forEach((img) => {
        img.addEventListener('click', function() {
            const playerSelection = img.className
            results.innerHTML='';
            rounds.innerHTML='';
            endResults.innerHTML='';
                function playSingleRound() {
                    let computerSelection = getComputerChoice();
                    if (playerSelection === computerSelection) {
                        playerScore ++;
                        computerScore ++;
                        numberOfRounds ++;
                        tie.textContent = 'It\' a tie! ' + 'Player score is: ' + playerScore + ' Computer score is: ' + computerScore;
                        results.appendChild(tie); 
                        rounds.textContent = 'You have played ' + numberOfRounds + ' rounds.'
                        Number_Of_Rounds.appendChild(rounds);
                        if (numberOfRounds === 5) {
                            return(playGame());
                        }
                    } else if ((playerSelection === 'Rock' && computerSelection === 'Scissors') ||
                    (playerSelection === 'Scissors' && computerSelection === 'Paper') ||
                    (playerSelection === 'Paper' && computerSelection === 'Rock')) {
                        playerScore ++;
                         numberOfRounds ++;
                        win.textContent = 'You win! ' + playerSelection + ' beats ' + computerSelection + '! Player score is: ' + playerScore + ' Computer score is: ' + computerScore;
                        results.appendChild(win);
                        rounds.textContent = 'You have played ' + numberOfRounds + ' rounds.'
                        Number_Of_Rounds.appendChild(rounds);
                        if (numberOfRounds === 5) {
                            return(playGame());
                        }
                    } else if ((playerSelection === 'Scissors' && computerSelection === 'Rock') ||
                    (playerSelection === 'Paper' && computerSelection === 'Scissors') ||
                    (playerSelection === 'Rock' && computerSelection === 'Paper')) {
                        computerScore ++;
                        numberOfRounds ++;
                        loss.textContent = 'You lose! ' + computerSelection + ' beats ' + playerSelection + '! Player score is: ' + playerScore + ' Computer score is: ' + computerScore;
                        results.appendChild(loss);
                        rounds.textContent = 'You have played ' + numberOfRounds + ' rounds.'
                        Number_Of_Rounds.appendChild(rounds);
                        if (numberOfRounds === 5) {
                            return(playGame());
                        }
                    } 
                }
                return(playSingleRound())

        })
    })

function playGame() {
        if (playerScore > computerScore) {
            endResults.textContent = 'Game over! You win! ' + 'Player score is: ' + playerScore + ' Computer score is: ' + computerScore;
            resetScore();
        } else if (computerScore > playerScore) {
            endResults.textContent = 'Game over! You lose! ' + 'Player score is: ' + playerScore + ' Computer score is: ' + computerScore;
            resetScore();
        } else {
            endResults.textContent = 'Game over! It\'s a tie! ' + 'Player score is: ' + playerScore + ' Computer score is: ' + computerScore;
            resetScore();
        }
}

function resetScore() {
    playerScore = 0;
    computerScore = 0;
    numberOfRounds = 0;
}

    

