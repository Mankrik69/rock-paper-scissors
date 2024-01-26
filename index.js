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
            }
    }
}

function restart() {
    Array.from(choice.children).forEach(button => {
        button.disabled = true;
    })

    const restart = document.createElement("div");
    const playAgain = document.createElement("button");
    playAgain.textContent = "Play again";
    restart.appendChild(playAgain);
    container.appendChild(restart);

    playAgain.addEventListener("click", () => {
        playerScore = 0;
        computerScore = 0;
        score.textContent = "Current score: 0 - 0";
        message.textContent = "Your turn";

        Array.from(choice.children).forEach(button => {
            button.disabled = false;
        })

        container.removeChild(restart);
    })
}

function game() {
    Array.from(choice.children).forEach(button => {
        button.addEventListener("click", () => {
            message.textContent = playRound(button.id, getComputerChoice());
            score.textContent = `Current score: ${playerScore} - ${computerScore}`;

            if (playerScore === 5) {
                score.textContent = `You have Won! Final score: ${playerScore} - ${computerScore}`;
                restart();
            } else if (computerScore === 5) {
                score.textContent = `You have Lost! Final score: ${playerScore} - ${computerScore}`;
                restart();
            }
        })
    })
}

const container = document.querySelector(".container")
const choice = document.querySelector("#choice");
const message = document.querySelector("#message");
const score = document.querySelector("#score");

let playerScore = 0;
let computerScore = 0;

game();
