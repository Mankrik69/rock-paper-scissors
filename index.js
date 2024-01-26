function getComputerChoice() {
    const choice = ["rock", "paper", "scissors"];

    return choice[randomInteger(0, 2)];
}

function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function playRound(playerSelection, computerSelection) {
    switch (playerSelection.toLowerCase()) {

        case "rock":
            if (computerSelection === "scissors") {
                // alert("You Win! Rock beats Scissors");
                // playerScore++;
                break;
            } else if (computerSelection === "paper") {
                // alert("You Lose! Paper beats Rock");
                // computerScore++;
                break;
            } else {
                // alert("A Tie! Replaying round");
                // playRound(prompt("Your turn"), getComputerChoice());
                break;
            }

        case "paper":
            if (computerSelection === "rock") {
                // alert("You Win! Paper beats Rock");
                // playerScore++;
                break;
            } else if (computerSelection === "scissors") {
                // alert("You Lose! Scissors beat Paper");
                // computerScore++;
                break;
            } else {
                // alert("A Tie! Replaying round");
                // playRound(prompt("Your turn"), getComputerChoice());
                break;
            }

        case "scissors":
            if (computerSelection === "paper") {
                // alert("You Win! Scissors beat Paper");
                // playerScore++;
                break;
            } else if (computerSelection === "rock") {
                // alert("You Lose! Rock beats Scissors");
                // computerScore++;
                break;
            } else {
                // alert("A Tie! Replaying round");
                // playRound(prompt("Your turn"), getComputerChoice());
                break;
            }
    }
}


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