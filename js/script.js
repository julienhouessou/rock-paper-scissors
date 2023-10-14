const choices = ['Rock','Paper','Scissors']
const random = Math.floor(Math.random() * choices.length);

function getComputerChoice (){
    return choices [random]
};