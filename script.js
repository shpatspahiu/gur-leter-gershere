const ROCK = "Rock";
const PAPER = "Paper";
const SCISSOR = "Scissors";

var playerScore = 0;
var computerScore = 0;

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

function playRound(playerSelection, computerSelection) {
  checkWinner();
  const playerWins = `You win! ${playerSelection} beats ${computerSelection}`;
  const computerWins = `You lose. ${computerSelection} beats ${playerSelection}`;

  if (playerSelection === computerSelection) {
    return "DRAW";
  } else if (playerSelection === ROCK) {
    if (computerSelection === PAPER) {
      computerScore++;
      console.log(`computer score: ${computerScore}`);
      return computerWins;
    }
    if (computerSelection === SCISSOR) {
      playerScore++;
      console.log(`player score: ${playerScore}`);
      return playerWins;
    }
  } else if (playerSelection === PAPER) {
    if (computerSelection === SCISSOR) {
      computerScore++;
      console.log(`computer score: ${computerScore}`);
      return computerWins;
    }
    if (computerSelection === ROCK) {
      playerScore++;
      console.log(`player score: ${playerScore}`);
      return playerWins;
    }
  } else if (playerSelection === SCISSOR) {
    if (computerSelection === ROCK) {
      computerScore++;
      console.log(`computer score: ${computerScore}`);
      return computerWins;
    }
    if (computerSelection === PAPER) {
      playerScore++;
      console.log(`player score: ${playerScore}`);
      return playerWins;
    }
  }
}

function checkWinner() {
  if (playerScore >= 5 || computerScore >= 5) {
    if (playerScore > computerScore) {
      resultHeading.textContent = "Player Wins! Game Over.";
    } else {
      resultHeading.textContent = "Computer Wins! Game Over.";
    }
  }
}

const resultHeading = document.querySelector("#roundResult h2");
resultHeading.textContent = "ROCK - PAPER - SCISSORS BABBOOOO";

const score = document.querySelector("#roundResult p");
score.textContent = `You: ${playerScore} | Computer: ${computerScore}`;

const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");

rockBtn.addEventListener("click", () => {
  resultHeading.textContent = playRound(ROCK, getComputerChoice());
});

paperBtn.addEventListener("click", () => {
  resultHeading.textContent = playRound(PAPER, getComputerChoice());
});

scissorsBtn.addEventListener("click", () => {
  resultHeading.textContent = playRound(SCISSOR, getComputerChoice());
});
