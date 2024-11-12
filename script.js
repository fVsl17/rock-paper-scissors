'use strict';

function getComputerChoice (){
    const choice = ['rock', 'paper', 'scissors'];
    return choice[Math.floor(Math.random() * choice.length)];
}

function getHumanChoice () {
    const choice = prompt("Rock, paper or scissors?");
    return choice;
}



function playRound(humanScore, computerScore){
    const playerChoice = getHumanChoice().toLowerCase();
    const computerChoice = getComputerChoice();
    if (playerChoice === 'rock' && computerChoice === 'scissors'){
        console.log(`You win! ${playerChoice} beats ${computerChoice}`);
        humanScore++;
        console.log(`Your score: ${humanScore} || Computer score: ${computerScore}`);
        return 1;
    } else if (playerChoice === 'paper' && computerChoice === 'rock'){
        console.log(`You win! ${playerChoice} beats ${computerChoice}`);
        humanScore++;
        console.log(`Your score: ${humanScore} || Computer score: ${computerScore}`);
        return 1;
    } else if (playerChoice === 'scissors' && computerChoice === 'paper'){
        console.log(`You win! ${playerChoice} beats ${computerChoice}`);
        humanScore++;
        console.log(`Your score: ${humanScore} || Computer score: ${computerScore}`);
        return 1;
    } else if (playerChoice === computerChoice){
        console.log(`Draw! You both chose ${playerChoice}`);
        console.log(`Your score: ${humanScore} || Computer score: ${computerScore}`);
        return 0;
    } else {
        console.log(`You lose! ${computerChoice} beats ${playerChoice}`);
        computerScore++;
        console.log(`Your score: ${humanScore} || Computer score: ${computerScore}`);
        return -1;
    }
}

function playGame(){
    let times = 5, humanScore = 0, computerScore = 0;
    while (times) {
        const decide = playRound(humanScore, computerScore);
        if (decide === 1)
            humanScore++;
        if (decide === -1)
            computerScore++;
        times--;
    }
    if (humanScore > computerScore) {
        console.log(`You won this game! Your score: ${humanScore} || Computer score: ${computerScore}`);
    } else if (computerScore > humanScore){
        console.log(`You lost this game! Your score: ${humanScore} || Computer score: ${computerScore}`);
    } else {
        console.log(`Draw! You both have the same score: ${humanScore}`);
    }
}