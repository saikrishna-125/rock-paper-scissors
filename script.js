function getComputerChoice() {
  number = Math.floor(Math.random() * 3);

  if (number === 0) {
    return "Rock";
  } else if (number === 1) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

function getHumanChoice() {
  choice = prompt("Pick one of these: Rock/ Paper/ Scissors:");
  return choice;
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    humanChoice =
      humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1).toLowerCase();

    if (
      (humanChoice === "Rock" && computerChoice === "Paper") ||
      (humanChoice === "Paper" && computerChoice === "Scissors") ||
      (humanChoice === "Scissors" && computerChoice === "Rock")
    ) {
      console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
      computerScore++;
    } else if (humanChoice === computerChoice) {
      console.log(`Its a Draw! both selected ${humanChoice}`);
    } else {
      console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
      humanScore++;
    }
    console.log(`Your Score: ${humanScore}, Computer Score: ${computerScore}`);
  }

  for (let i = 0; i < 5; i++) {
    playRound(getHumanChoice(), getComputerChoice());
  }

  let result = "Game Over!\n\n";

  if (humanScore === computerScore) {
    result += "Its a Draw!";
  } else {
    result += humanScore > computerScore ? "You win!" : "You lose!";
  }

  result += `\nYour Score: ${humanScore}, Computer Score: ${computerScore}`;

  console.log(result);
}

playGame();
