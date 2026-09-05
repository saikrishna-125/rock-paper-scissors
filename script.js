// Gets computer Choice - random select from 0-2
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

// variables
let humanScore = 0;
let computerScore = 0;
let roundOutcome = "";

// selectors
const body = document.querySelector("body");
const buttons = document.querySelectorAll("button");
const humanScoreElement = document.querySelector("#human-score");
const computerScoreElement = document.querySelector("#computer-score");

const humanChoiceDiv = document.querySelector("#human-choice");
const computerChoiceDiv = document.querySelector("#computer-choice");
const roundOutcomeText = document.querySelector("#outcome-text");

// takes human and computer choice, compares and shows round outcome
function playRound(humanChoice, computerChoice) {
  humanChoiceDiv.textContent = `Your Choice: ${humanChoice}`;
  computerChoiceDiv.textContent = `Computer Choice: ${computerChoice}`;

  if (
    (humanChoice === "Rock" && computerChoice === "Paper") ||
    (humanChoice === "Paper" && computerChoice === "Scissors") ||
    (humanChoice === "Scissors" && computerChoice === "Rock")
  ) {
    roundOutcome = `You lose! ${computerChoice} beats ${humanChoice}.`;
    computerScore++;
  } else if (humanChoice === computerChoice) {
    roundOutcome = `Its a Draw! Both selected ${humanChoice}`;
  } else {
    roundOutcome = `You win! ${humanChoice} beats ${computerChoice}.`;
    humanScore++;
  }

  humanScoreElement.textContent = humanScore;
  computerScoreElement.textContent = computerScore;

  roundOutcomeText.textContent = roundOutcome;

  if (humanScore === 5 || computerScore === 5) {
    endGame();
  }
}

// Show winner, disable buttons and show reset button
function endGame() {
  let result = "Game Over!\n\n";

  result += humanScore > computerScore ? "You win!" : "You lose!";

  resultText = document.createElement("p");

  resultText.textContent = result;

  body.appendChild(resultText);

  for (const button of buttons) {
    button.disabled = true;
  }

  const div = document.createElement("div");
  const resetButton = document.createElement("button");

  resetButton.textContent = "Reset Game";

  // reset button should reset all scores and text, enable buttons
  //  and remove final result and reset button
  resetButton.addEventListener("click", () => {
    humanScore = 0;
    computerScore = 0;
    humanScoreElement.textContent = humanScore;
    computerScoreElement.textContent = computerScore;

    roundOutcome = "";
    humanChoiceDiv.textContent = "";
    computerChoiceDiv.textContent = "";
    roundOutcomeText.textContent = roundOutcome;
    resultText.remove();
    resetButton.remove();

    for (const button of buttons) {
      button.disabled = false;
    }
  });

  div.appendChild(resetButton);
  body.appendChild(div);
}

// Call playRound() when user clicks on a button
for (const button of buttons) {
  button.addEventListener("click", () => {
    let humanChoice = button.textContent;
    playRound(humanChoice, getComputerChoice());
  });
}
