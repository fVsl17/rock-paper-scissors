'use strict';



const button1 = document.querySelector(".btn1");
const button2 = document.querySelector(".btn2");
const button3 = document.querySelector(".btn3");
const gameHeader = document.querySelector(".game-header");
const playerScoreHtml = document.querySelector(".player-score");
const computerScoreHtml = document.querySelector(".computer-score");
const choice1 = document.querySelector(".player-choice");
const choice2 = document.querySelector(".computer-choice");
let playerScore = 0, computerScore = 0;
playerScoreHtml.textContent = "Your score: 0";
computerScoreHtml.textContent = "Computer score: 0";

choice1.textContent = '';
choice2.textContent = '';

function getComputerChoice(){
    const choices = ['rock', 'paper', 'scissors'];
    const c = choices[Math.floor(Math.random() * choices.length)];
    choice2.textContent = c;
    return c;
};

function checkWin(){
    if (playerScore === 5){
        gameHeader.textContent = `You win this game because you reached score 5!`;
        playerScore = 0;
        computerScore = 0;
        playerScoreHtml.textContent = `Your score: 0`;
        computerScoreHtml.textContent = `Computer score: 0`;
    }
    if (computerScore === 5){
        gameHeader.textContent = `You lose this game because the computer reached score 5!`;
        playerScore = 0;
        computerScore = 0;
        playerScoreHtml.textContent = `Your score: 0`;
        computerScoreHtml.textContent = `Computer score: 0`;
    }
}

function playRound(playerChoice, computerChoice){
    if (playerChoice === 'rock' && computerChoice === 'scissors'){
        choice1.textContent = 'Rock';
        gameHeader.textContent = `You win! Rock beats Scissors!`;
        playerScore++;
        playerScoreHtml.textContent = `Your score: ${playerScore}`;
    } else if (playerChoice === 'paper' && computerChoice === 'rock'){
        choice1.textContent = 'Paper';
        gameHeader.textContent = "You win! Paper beats Rock!";
        playerScore++;
        playerScoreHtml.textContent = `Your score: ${playerScore}`;
    } else if (playerChoice === 'scissors' && computerChoice === 'paper'){
        choice1.textContent = 'Scissors';
        gameHeader.textContent = "You win! Scissors beats Paper!";
        playerScore++;
        playerScoreHtml.textContent = `Your score: ${playerScore}`;
    } else if (playerChoice === computerChoice){
        gameHeader.textContent = `Draw! You both picked ${playerChoice}`;
        choice1.textContent = `${playerChoice}`;
    } else {
        choice1.textContent = `${playerChoice}`;
        gameHeader.textContent = `You lose! ${computerChoice} beats ${playerChoice}!`;
        computerScore++;
        computerScoreHtml.textContent = `Computer score: ${computerScore}`;
    }
    checkWin();
};

button1.addEventListener("click", () => {
    playRound('rock', getComputerChoice());
}, true);
button2.addEventListener("click", () => {
    playRound('paper', getComputerChoice())
}, true);
button3.addEventListener("click", () => {
    playRound('scissors', getComputerChoice());
}, true);