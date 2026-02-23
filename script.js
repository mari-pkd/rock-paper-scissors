//create a variable for user input
let userChoice = "";
//create a variable for computer choice
let computerChoice = "";
//create score variables
let userScore = 0;
let computerScore = 0;

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

function getUserChoice() {
    userChoice = prompt("Choose Rock, Paper or Scissors: ");
    console.log(userChoice)
    return userChoice;
}

function playRound(userChoice, computerChoice) {
    userChoice = userChoice.toLowerCase();
    if (userChoice == computerChoice) {
        console.log("It's a tie!")
    }
    else {
    if (userChoice == "rock" && computerChoice == "paper" 
        || userChoice == "paper" && computerChoice == "scissors" 
        || userChoice == "scissors" && computerChoice == "rock") {
        console.log(`You lose! ${computerChoice} beats ${userChoice}!`);
        computerScore +=1;
    } else {
        console.log(`You win! ${userChoice} beats ${computerChoice}!`);
        userScore += 1;
    }
    }

}

function playGame(imax) {
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




