const ROCK = "Rock";
const PAPER = "Paper";
const SCISSOR = "Scissors";

function getComputerChoice() {
  let max = 2;
  let min = 0;
  switch (Math.floor(Math.random() * (max - min + 1) + min)) {
    case 0:
      return ROCK;
      break;

    case 1:
      return PAPER;
      break;

    case 2:
      return SCISSOR;
      break;
  }
}

// function getPlayerChoice() {
//   let input = prompt("Enter Rock-Paper-Scissor");
//   input = input.trim().toLowerCase();
//   return input;
// }

function playRound(playerSelection, computerSelection) {
  const playerWins = `You win! ${playerSelection} beats ${computerSelection}`;
  const computerWins = `You lose. ${computerSelection} beats ${playerSelection}`;

  if (playerSelection === computerSelection) {
    return "DRAW";
  } else if (playerSelection === ROCK) {
    if (computerSelection === PAPER) return computerWins;
    if (computerSelection === SCISSOR) return playerWins;
  } else if (playerSelection === PAPER) {
    if (computerSelection === SCISSOR) return computerWins;
    if (computerSelection === ROCK) return playerWins;
  } else if (playerSelection === SCISSOR) {
    if (computerSelection === ROCK) return computerWins;
    if (computerSelection === PAPER) return playerWins;
  }
}

const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");

rockBtn.addEventListener("click", () => {
  console.log(playRound(ROCK, getComputerChoice()));
});

paperBtn.addEventListener("click", () => {
  console.log(playRound(PAPER, getComputerChoice()));
});

scissorsBtn.addEventListener("click", () => {
  console.log(playRound(SCISSOR, getComputerChoice()));
});
