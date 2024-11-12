'use strict';

function getComputerChoice (){
    const choice = ['rock', 'paper', 'scissors'];
    return choice[Math.floor(Math.random() * choice.length)];
}

function getHumanChoice () {
    const choice = prompt("Rock, paper or scissors?");
    return choice;
}

let humanScore, computerScore;
humanScore = computerScore = 0;


function playRound(){
    const playerChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    if (playerChoice === 'rock' && computerChoice === 'scissors'){
        console.log(`You win! ${playerChoice} beats ${computerChoice}`);
        humanScore++;
        console.log(`Your score: ${humanScore} || Computer score: ${computerScore}`);
    } else if (playerChoice === 'paper' && computerChoice === 'rock'){
        console.log(`You win! ${playerChoice} beats ${computerChoice}`);
        humanScore++;
        console.log(`Your score: ${humanScore} || Computer score: ${computerScore}`);
    } else if (playerChoice === 'scissors' && computerChoice === 'paper'){
        console.log(`You win! ${playerChoice} beats ${computerChoice}`);
        humanScore++;
        console.log(`Your score: ${humanScore} || Computer score: ${computerScore}`);
    } else if (playerChoice === computerChoice){
        console.log(`Draw! You both chose ${playerChoice}`);
        console.log(`Your score: ${humanScore} || Computer score: ${computerScore}`);
    } else {
        console.log(`You lose! ${computerChoice} beats ${playerChoice}`);
        computerScore++;
        console.log(`Your score: ${humanScore} || Computer score: ${computerScore}`);
    }
}