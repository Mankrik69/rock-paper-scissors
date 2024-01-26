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
                return "You Win! Rock beats Scissors";
                // playerScore++;
            } else if (computerSelection === "paper") {
                return "You Lose! Paper beats Rock";
                // computerScore++;
            } else {
                return "A Tie! Replaying round";
                // playRound(prompt("Your turn"), getComputerChoice());
            }

        case "paper":
            if (computerSelection === "rock") {
                return "You Win! Paper beats Rock";
                // playerScore++;
            } else if (computerSelection === "scissors") {
                return "You Lose! Scissors beat Paper";
                // computerScore++;
            } else {
                return "A Tie! Replaying round";
                // playRound(prompt("Your turn"), getComputerChoice());
            }

        case "scissors":
            if (computerSelection === "paper") {
                return "You Win! Scissors beat Paper";
                // playerScore++;
            } else if (computerSelection === "rock") {
                return "You Lose! Rock beats Scissors";
                // computerScore++;
            } else {
                return "A Tie! Replaying round";
                // playRound(prompt("Your turn"), getComputerChoice());
            }
    }
}


const choice = document.querySelector("#choice");
const text = document.querySelector("#text");

choice.addEventListener("click", (e) => {
    text.textContent = playRound(e.target.id, getComputerChoice());
})

// function game() {
//     while (playerScore < 3 && computerScore < 3) {
//         playRound(prompt("Your turn"), getComputerChoice());
//         alert(`Current score: ${playerScore} - ${computerScore}`);
//     }

//     if (playerScore === 3) {
//         alert(`You have Won! Final score: ${playerScore} - ${computerScore}`);
//     } else if (computerScore === 3) {
//         alert(`You have Lost! Final score: ${playerScore} - ${computerScore}`);
//     }
// }

// let playerScore = 0;
// let computerScore = 0;

// game();