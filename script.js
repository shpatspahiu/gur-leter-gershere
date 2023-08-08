function getComputerChoice() {
  let max = 2;
  let min = 0;
  switch (Math.floor(Math.random() * (max - min + 1) + min)) {
    case 0:
      return "rock";
      break;

    case 1:
      return "paper";
      break;

    case 2:
      return "scissors";
      break;
  }
}

function getPlayerChoice() {
  let input = prompt("Enter Rock-Paper-Scissor");
  input = input.trim().toUpperCase();
  console.log(input);
  return input;
}

const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();
const playerWins = "You win!";
const computerWins = "Computer wins! You lose.";

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "DRAW";
  } else if (playerSelection === "rock") {
    if (computerSelection === "paper") return computerWins;
    if (computerSelection === "scissors") return playerWins;
  } else if (playerSelection === "paper") {
    if (computerSelection === "scissors") return computerWins;
    if (computerSelection === "rock") return playerWins;
  } else if (playerSelection === "scissors") {
    if (computerSelection === "rock") return computerWins;
    if (computerSelection === "paper") return playerWins;
  }
}
