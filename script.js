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
  const playerWins = `You win! ${playerSelection} beats ${computerSelection}`;
  const computerWins = `You lose. ${computerSelection} beats ${playerSelection}`;

  if (playerSelection === computerSelection) {
    updateScore();
    return "DRAW";
  } else if (playerSelection === ROCK) {
    if (computerSelection === PAPER) {
      computerScore++;
      updateScore();
      console.log(`computer score: ${computerScore}`);
      return computerWins;
    }
    if (computerSelection === SCISSOR) {
      playerScore++;
      updateScore();
      console.log(`player score: ${playerScore}`);
      return playerWins;
    }
  } else if (playerSelection === PAPER) {
    if (computerSelection === SCISSOR) {
      computerScore++;
      updateScore();
      console.log(`computer score: ${computerScore}`);
      return computerWins;
    }
    if (computerSelection === ROCK) {
      playerScore++;
      updateScore();
      console.log(`player score: ${playerScore}`);
      return playerWins;
    }
  } else if (playerSelection === SCISSOR) {
    if (computerSelection === ROCK) {
      computerScore++;
      updateScore();
      console.log(`computer score: ${computerScore}`);
      return computerWins;
    }
    if (computerSelection === PAPER) {
      playerScore++;
      updateScore();
      console.log(`player score: ${playerScore}`);
      return playerWins;
    }
  }
}

function checkWinner() {
  if (playerScore >= 5 || computerScore >= 5) {
    endGame();
    if (playerScore > computerScore) {
      resultHeading.textContent = "You Win!";
    } else {
      resultHeading.textContent = "Computer Wins!";
    }
  }
}

const contentDiv = document.querySelector(".content");

function endGame() {
  rockBtn.parentNode.removeChild(rockBtn);
  paperBtn.parentNode.removeChild(paperBtn);
  scissorsBtn.parentNode.removeChild(scissorsBtn);

  const gameOverMessage = document.createElement("h1");
  gameOverMessage.textContent = "Game Over";
  gameOverMessage.style = " font-style: oblique;";
  contentDiv.appendChild(gameOverMessage);
}

const resultHeading = document.querySelector("#roundResult h2");
const score = document.querySelector("#roundResult p");
resultHeading.textContent = "- ";
score.textContent = " - ";

function updateScore() {
  score.innerHTML = `<strong>Score:</strong> You: ${playerScore} | Computer: ${computerScore}`;
}

const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");

rockBtn.addEventListener("click", () => {
  resultHeading.textContent = playRound(ROCK, getComputerChoice());
  checkWinner();
});

paperBtn.addEventListener("click", () => {
  resultHeading.textContent = playRound(PAPER, getComputerChoice());
  checkWinner();
});

scissorsBtn.addEventListener("click", () => {
  resultHeading.textContent = playRound(SCISSOR, getComputerChoice());
  checkWinner();
});
