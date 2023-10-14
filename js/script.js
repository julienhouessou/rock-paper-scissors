let playerSelection;
let computerSelection;

let message;
let playerScore = 0;
let computerScore = 0;

function playRound (playerSelection,computerSelection){

const choices = ['Rock','Paper','Scissors']
const random = Math.floor(Math.random() * choices.length);

function getComputerChoice (){
    return choices [random]
};
playerSelection = prompt('Pick Rock, Paper, or Scissors','').toUpperCase();
computerSelection = getComputerChoice().toUpperCase();

if (playerSelection == computerSelection) {
    message = 'Draw!';
    playerScore += 1;
    computerScore += 1;
}
else if (playerSelection == 'PAPER') {
    if (computerSelection == 'ROCK'){
        message = 'You Win! Paper beats Rock'
        playerScore += 1;
    }
    else{ 
        message = 'You Lose! Scissors beats Paper';
        computerScore += 1;
        }
}
else if (playerSelection == 'ROCK') {
    if (computerSelection == 'PAPER'){
        message ='You Lose! Paper beats Rock';
        computerScore += 1;
    }
    else{ 
        message = 'You Win! Rock beats Scissors';
        playerScore += 1;
        }
}
else if (playerSelection == 'SCISSORS') {
    if (computerSelection == 'ROCK'){
        message ='You Lose! Rock beats Scissors';
        computerScore += 1;
    }
    else{ 
    message = 'You Win! Scissors beats Paper';
    playerScore += 1;
    }
}
else {message = 'Pick a valid option'}
;
console.log(`Player chose: ${playerSelection}`);
console.log(`Computer chose: ${computerSelection}`);
console.log(message);
console.log(`Player score: ${playerScore}`);
console.log(`Computer score: ${computerScore}`);
return playerScore, computerScore;

};

function game (playRound){
    for (let i = 1; i <= 5; i++){
    playRound(playerSelection,computerSelection);
};
if (playerScore > computerScore) {console.log('The player wins!!!')}
else if (playerScore < computerScore) {console.log('You lost to the computer...')}
else {console.log('It\'s a draw, meh')}
}

game(playRound);