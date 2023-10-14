const choices = ['Rock','Paper','Scissors']
const random = Math.floor(Math.random() * choices.length);

function getComputerChoice (){
    return choices [random]
};

let playerSelection = prompt('Pick Rock, Paper, or Scissors').toUpperCase();
let computerSelection = getComputerChoice();

console.log(playerSelection);
console.log(computerSelection);
let message;

function playRound (playerSelection,computerSelection){
if (playerSelection == computerSelection) {
    message = 'Draw!'
}
else if (playerSelection == 'PAPER') {
    if (computerSelection == 'Rock'){
        message = 'You Win! Paper beats Rock'
    }
    else{ message = 'You Lose! Scissors beats Paper'}
}
else if (playerSelection == 'ROCK') {
    if (computerSelection == 'Paper'){
        message ='You Lose! Paper beats Rock'
    }
    else{ message = 'You Win! Rock beats Scissors'}
}
else if (playerSelection == 'SCISSORS') {
    if (computerSelection == 'Rock'){
        message ='You Lose! Rock beats Scissors'
    }
    else{ message = 'You Win! Scissors beats Paper'}
}
else {message = 'Pick a valid option'}
;
console.log(message)
};

playRound(playerSelection,computerSelection)