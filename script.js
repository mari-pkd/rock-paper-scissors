//base variables
let userChoice = "";
let computerChoice = "";
let userScore = 0;
let computerScore = 0;

//UI variables
const buttons = document.querySelector(".button-container");
const log = document.querySelector(".log");
const userScoreDisplay = document.querySelector(".user-score");
const computerScoreDisplay = document.querySelector(".computer-score");

function getComputerChoice() {
    choice = Math.floor(Math.random() * 3) + 1;
    switch(choice) {
        case 1:
            computerChoice = "rock";
            break;
        case 2:
            computerChoice = "paper";
            break;
        case 3:
            computerChoice = "scissors";
            break;
    } 
    return computerChoice;
}

function scoreDisplay() {
    userScoreDisplay.textContent = userScore;
    computerScoreDisplay.textContent = computerScore;
}

function playRound(userChoice, computerChoice) {
    if (userChoice == computerChoice) {
        log.textContent = "It's a tie!";
    }
    else {
    if (userChoice == "rock" && computerChoice == "paper" 
        || userChoice == "paper" && computerChoice == "scissors" 
        || userChoice == "scissors" && computerChoice == "rock") {
        log.textContent = `You lose! ${computerChoice} beats ${userChoice}!`;
        computerScore +=1;
    } else {
        log.textContent = `You win! ${userChoice} beats ${computerChoice}!`;
        userScore += 1;
    }
    }
    if (userScore == 5 || computerScore == 5) {
        if (userScore == 5) alert("You won 5 rounds!");
        if (computerScore == 5) alert("You lost 5 rounds...");
        log.textContent = "Endgame!";
        scoreDisplay();

        const reset = document.createElement("button");
        reset.textContent = "Reset game";
        log.appendChild(reset);

        reset.addEventListener("click", () => {
            log.textContent = "";
            userScore = 0;
            computerScore = 0;
            scoreDisplay();
            reset.remove();
        })

    }
}

buttons.addEventListener("click", (event) => {
    let target = event.target;

    switch (target.id) {
        case "rock":
            userChoice = "rock";
            break;
        case "paper":
            userChoice = "paper";
            break;
        case "scissors":
            userChoice = "scissors";
    }
    
    computerChoice = getComputerChoice();
    console.log(userChoice, computerChoice);
    playRound(userChoice, computerChoice);
    scoreDisplay();
    
})



/* function playGame(imax) {
    // define number of rounds. for imax rounds perform:
    for (let i = 0; i < imax; i++) {
        const userSelection = getUserChoice();
        const computerSelection = getComputerChoice();
        console.log(userSelection, computerSelection);
        playRound(userSelection, computerSelection);
        console.log(userScore, computerScore);
    }
    // after game ends, count score:
    if (userScore > computerScore) {
        console.log(`You win with a score of ${userScore}!`);
    } else if (userScore == computerScore) {
        console.log("It's a tie!");
    } else {
        console.log("You lose...");
    }
}

playGame(5);
*/



