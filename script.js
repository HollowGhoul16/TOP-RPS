// Randomly select the computer's choice
function getComputerChoice() {
    const choice = Math.floor(Math.random()*3);
    
    if(choice == 0) return "rock";
    if(choice == 1) return "paper";
    if(choice == 2) return "scissors";
}

// Callback function for the choice buttons' events, checks for winner
function playRound(humanChoice, computerChoice) {
    if(humanChoice === "rock") {
        switch(computerChoice){
            case "rock":
                result.textContent="It's a tie!";
                break;
            case "paper":
                result.textContent="The computer wins!";
                computerScore++;
                break;
            case "scissors":
                result.textContent="You win!";
                humanScore++;
                break;
        }
    }
    else if(humanChoice === "paper") {
        switch(computerChoice){
            case "rock":
                result.textContent="You win!";
                humanScore++;
                break;
            case "paper":
                result.textContent="It's a tie!";
                break;
            case "scissors":
                result.textContent="The computer wins!";
                computerScore++;
                break;
        }
    }
    else if(humanChoice === "scissors"){
        switch(computerChoice){
            case "rock":
                result.textContent="The computer wins!";
                computerScore++;
                break;
            case "paper":
                result.textContent="You win!";
                humanScore++;
                break;
            case "scissors":
                result.textContent="It's a tie!";
                break;
        }
    }

    // Update html to display correct score
    humanScoreDisplayed.textContent = humanScore.toString();
    computerScoreDisplayed.textContent = computerScore.toString();

    // End the game if there is a winner (5 points)
    if(humanScore == 5 || computerScore == 5) finishGame();
}

// Decides winner and cleans up game
function finishGame() {
     if(humanScore > computerScore) result.textContent="You win the game!";
     else if(humanScore < computerScore) result.textContent="You lost the game!";

    computerScore = 0;
    humanScore = 0;
    humanScoreDisplayed.textContent = "0";
    computerScoreDisplayed.textContent = "0";
}

// Initalize score variables to zero
let humanScore = 0;
let computerScore = 0;

// Get choice buttons
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

// Get displayed score/result html
const result = document.querySelector("#result");
const humanScoreDisplayed = document.querySelector("#humanScoreTracker");
const computerScoreDisplayed = document.querySelector("#computerScoreTracker");

// Add event listeners for each button and play the respective choice
rock.addEventListener("click", () => playRound("rock", getComputerChoice()));
paper.addEventListener("click", () => playRound("paper", getComputerChoice()));
scissors.addEventListener("click", () => playRound("scissors", getComputerChoice()));