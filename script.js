const ROCK = 0;
const PAPER = 1;
const SCISSOR = 2;

function getComputerChoice() {
  let max = 2;
  let min = 0;
  switch (Math.floor(Math.random() * (max - min + 1) + min)) {
    case 0:
      return "GUR";
      break;

    case 1:
      return "LETER";
      break;

    case 2:
      return "GERSHERE";
      break;
  }
}
