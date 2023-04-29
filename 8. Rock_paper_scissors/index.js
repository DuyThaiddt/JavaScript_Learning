const playerText = document.querySelector('#playerText');
const computerText = document.querySelector('#computerText');
const resultText = document.querySelector('#resultText');
const choiceBts = document.querySelectorAll('.choiceBt');
let player, computer, result;
choiceBts.forEach(button => {
    button.addEventListener("click", () => {
        player = button.textContent.toLowerCase();
        computerTurn();
        playerText.textContent = `Player: ${player}`;
        computerText.textContent = `Computer: ${computer}`;
        resultText.textContent = checkWinner();
    })
})

function computerTurn() {
    const randNum = Math.floor(Math.random() * 3) + 1;
    switch (randNum) {
        case 1:
            computer = "rock";
            break;
        case 2:
            computer = "paper";
            break;
        case 3:
            computer = "scissors";
            break;
    }
}

function checkWinner(){
    if(player == computer){
        return "DRAW!";
    }else if(computer == "rock"){
        return(player == "paper") ? "YOU WIN!" : "YOU LOSE!";
    }else if(computer == "paper"){
        return(player == "scissors") ? "YOU WIN!" : "YOU LOSE!";
    }else if(computer == "scissors"){
        return(player == "rock") ? "YOU WIN!" : "YOU LOSE!";
    }
}