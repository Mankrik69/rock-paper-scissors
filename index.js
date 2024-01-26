function getComputerChoice() {
    const choice = ["rock", "paper", "scissors"];

    return choice[randomInteger(0, 2)];
}

function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function playRound(playerSelection, computerSelection) {
    switch (playerSelection) {

        case "rock":
            if (computerSelection === "scissors") {
                playerScore++;
                return "You Win! Rock beats Scissors";
            } else if (computerSelection === "paper") {
                computerScore++;
                return "You Lose! Paper beats Rock";
            } else {
                return "A Tie! Replaying round";
                // playRound(prompt("Your turn"), getComputerChoice());
            }

        case "paper":
            if (computerSelection === "rock") {
                playerScore++;
                return "You Win! Paper beats Rock";
            } else if (computerSelection === "scissors") {
                computerScore++;
                return "You Lose! Scissors beat Paper";
            } else {
                return "A Tie! Replaying round";
                // playRound(prompt("Your turn"), getComputerChoice());
            }

        case "scissors":
            if (computerSelection === "paper") {
                playerScore++;
                return "You Win! Scissors beat Paper";
            } else if (computerSelection === "rock") {
                computerScore++;
                return "You Lose! Rock beats Scissors";
            } else {
                return "A Tie! Replaying round";
                // playRound(prompt("Your turn"), getComputerChoice());
            }
    }
}


const choice = document.querySelector("#choice");
const message = document.querySelector("#message");
const score = document.querySelector("#score");

let playerScore = 0;
let computerScore = 0;


function game() {
    choice.addEventListener("click", (e) => {
        message.textContent = playRound(e.target.id, getComputerChoice());
        score.textContent = `Current score: ${playerScore} - ${computerScore}`;

        if (playerScore === 5) {
            message.textContent = `You have Won! Final score: ${playerScore} - ${computerScore}`;
        } else if (computerScore === 5) {
            message.textContent = `You have Lost! Final score: ${playerScore} - ${computerScore}`;
        }
    })
}

game();