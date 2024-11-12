'use strict';

function getComputerChoice (){
    const choice = ['rock', 'paper', 'scissors'];
    return choice[Math.floor(Math.random() * choice.length)];
}

function getHumanChoice () {
    const choice = prompt("Rock, paper or scissors?");
    return choice;
}
