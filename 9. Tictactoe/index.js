const cells = document.querySelectorAll('.cell');
const statusText = document.querySelector('#statusText');
const restartBt = document.querySelector('#restartBt');
const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8], // Horizontal
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8], // Vertical
    [0, 4, 8],
    [2, 4, 6] // Diagonal  
];
let options = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let running = false;
initializeGame();
function initializeGame() {
    cells.forEach(cell => { cell.addEventListener("click", cellClicked) })
    restartBt.addEventListener("click", restartGame);
    statusText.textContent = `${currentPlayer} turn`
    running = true;
}
function cellClicked() {
    const cellIndex = this.getAttribute("cellIndex");
    if (options[cellIndex] !== "" || !running) return;
    updateCell(this, cellIndex);
    // changePlayer();
    checkWinner();
}
function updateCell(cell, index) {
    options[index] = currentPlayer;
    cell.textContent = currentPlayer;
}

function changePlayer() {
    currentPlayer = (currentPlayer == "X") ? "O" : "X";
    statusText.textContent = `${currentPlayer} turn`
}
function checkWinner() {
    let win = false;
    for (let i = 0; i < winConditions.length; i++) {
        const condition = winConditions[i];
        let a = options[condition[0]];
        let b = options[condition[1]];
        let c = options[condition[2]];
        if (a == "" || b == "" || c == "") continue;
        if (a == b && b == c) {
            win = true;
            break;
        }
    }
    if (win) {
        statusText.textContent = `${currentPlayer} won!`
        running = false;
    } else if (!options.includes("")) {
        statusText.textContent = `Draw!`
        running = false;
    }else{
        changePlayer();
    }

}
function restartGame() {
    currentPlayer = "X";
    options = ["", "", "", "", "", "", "", "", ""];
    statusText.textContent = `${currentPlayer} turn`;
    cells.forEach(cell => { cell.textContent = "" });
    running = true;
}

