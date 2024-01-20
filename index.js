function getComputerChoice() {
    let choice = ["rock", "paper", "scissors"];

    return choice[randomInteger(0, 2)];
}

function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function playRound(playerSelection, computerSelection) {
    switch (playerSelection.toLowerCase()) {

        case "rock":
            if (computerSelection === "scissors") {
                return "You Win! Rock beats Scissors";
            } else if (computerSelection === "paper") {
                return "You Lose! Paper beats Rock";
            } else {
                return "A Tie!";
            }

        case "paper":
            if (computerSelection === "rock") {
                return "You Win! Paper beats Rock";
            } else if (computerSelection === "scissors") {
                return "You Lose! Scissors beat Paper";
            } else {
                return "A Tie!";
            }

        case "scissors":
            if (computerSelection === "paper") {
                return "You Win! Scissors beat Paper";
            } else if (computerSelection === "rock") {
                return "You Lose! Rock beats Scissors";
            } else {
                return "A Tie!";
            }
    }
}