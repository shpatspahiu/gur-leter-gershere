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
  input = input.trim().toLowerCase();
  return input;
}

function playRound(playerSelection, computerSelection) {
  const playerWins = `You win! ${playerSelection} beats ${computerSelection}`;
  const computerWins = `You lose. ${computerSelection} beats ${playerSelection}`;

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

alert(playRound(getPlayerChoice(), getComputerChoice()));
