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
                console.log("You Win! Rock beats Scissors");
                break;
            } else if (computerSelection === "paper") {
                console.log("You Lose! Paper beats Rock");
                break;
            } else {
                console.log("A Tie! Replaying round");
                playRound(prompt("Your turn"), getComputerChoice());
                break;
            }

        case "paper":
            if (computerSelection === "rock") {
                console.log("You Win! Paper beats Rock");
                break;
            } else if (computerSelection === "scissors") {
                console.log("You Lose! Scissors beat Paper");
                break;
            } else {
                console.log("A Tie! Replaying round");
                playRound(prompt("Your turn"), getComputerChoice());
                break;
            }

        case "scissors":
            if (computerSelection === "paper") {
                console.log("You Win! Scissors beat Paper");
                break;
            } else if (computerSelection === "rock") {
                console.log("You Lose! Rock beats Scissors");
                break;
            } else {
                console.log("A Tie! Replaying round");
                playRound(prompt("Your turn"), getComputerChoice());
                break;
            }
    }
}

playRound(prompt("Your turn"), getComputerChoice());