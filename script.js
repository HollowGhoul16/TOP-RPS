// This function will randomly select the computer's choice
function getComputerChoice() {
    const choice = Math.floor(Math.random()*3);
    
    if(choice == 0) return "rock";
    if(choice == 1) return "paper";
    if(choice == 2) return "scissors";
}

// Collects the user input
function getHumanChoice() {
    return prompt("Choose: Rock, Paper, Scissors");
}

// Call to play 5 rounds
function playGame() {
    // Declare score variables, initalize to zero
    let humanScore = 0;
    let computerScore = 0;

    // Inside declaration that decides the winner and increments the according score
    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();
        if(humanChoice === "rock") {
            switch(computerChoice){
                case "rock":
                    console.log("It's a tie!");
                    break;
                case "paper":
                    console.log("The computer wins!");
                    computerScore++;
                    break;
                case "scissors":
                    console.log("You win!");
                    humanScore++;
                    break;
            }
        }
        else if(humanChoice === "paper") {
            switch(computerChoice){
                case "rock":
                    console.log("You win!");
                    humanScore++;
                    break;
                case "paper":
                    console.log("It's a tie!");
                    break;
                case "scissors":
                    console.log("The computer wins!");
                    computerScore++;
                    break;
            }
        }
        else if(humanChoice === "scissors"){
            switch(computerChoice){
                case "rock":
                    console.log("The computer wins!");
                    computerScore++;
                    break;
                case "paper":
                    console.log("You win!");
                    humanScore++;
                    break;
                case "scissors":
                    console.log("It's a tie!");
                    break;
            }
        }
    }

    // Declare choice variables
    let humanChoice, computerChoice;

    // Plays 5 rounds
    for(i = 0; i < 5; i++){
        humanChoice = getHumanChoice();
        computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }

    // Decides winner
    if(humanScore > computerScore) console.log("You win the game!");
    else if(humanScore < computerScore) console.log("You lost the game!");
    else console.log("The game is a tie!");
}

// Play the game
playGame();