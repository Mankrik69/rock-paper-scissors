function getComputerChoice() {
    let choice = ["Rock", "Paper", "Scissors"];

    return choice[randomInteger(0, 2)];
}

function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}