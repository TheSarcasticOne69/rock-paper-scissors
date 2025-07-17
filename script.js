let playerScore = 0
let computerScore = 0

function getComputerChoice() {
    let computerChoice = Math.random()
    if (computerChoice < 0.3) {
        computerChoice = "rock";
    } else if (computerChoice < 0.6) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }
    return computerChoice;
}

function getUserChoice() {
    let userChoice = prompt("Pick One(rock,paper or scissors")
    return userChoice;
}

function playRound(computerChoice, playerChoice) {
    let result = "";
    if (playerChoice == computerChoice) {
        result = "Its A Tie!"
        playerScore++
        computerScore++
    }

    else if (playerChoice == "rock") {
        if (computerChoice == "paper") {
            result = "Paper Wraps rock,You Lose"
            computerScore += 2
        }
        else {
            result = "Rock Smashes Scissors,You Win"
            playerScore += 2
        }
    }

    else if (playerChoice == "paper") {
        if (computerChoice == "rock") {
            result = "Paper Wraps Rock,You Win"
            playerScore += 2
        }
        else {
            result = "Scissors cut paper,You Lose"
            computerScore += 2
        }
    }

    else {
        if (computerChoice == "paper") {
            result = "Scissors Cut Paper,You Win"
            playerScore += 2
        }
        else {
            result = "Rock Smashes Scissors,You Lose"
            computerScore += 2
        }
    }
    console.log(result)
}

function getScore(){
    console.log("Your Score : ",playerScore)
    console.log("Computer Score : ",computerScore)
}
function playGame() {
    for (let i = 0; i < 5; i++) {
        const playerChoice = getUserChoice().toLowerCase()
        const computerChoice = getComputerChoice()
        console.log("You Choose", playerChoice, "computer choose", computerChoice)
        playRound(playerChoice, computerChoice)
    }
}

playGame()
getScore()