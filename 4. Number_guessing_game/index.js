const answer = Math.floor(Math.random() * 10 + 1);
let guesses = 0;
document.getElementById("submitBt").onclick = function () {
    let guess = document.getElementById("guessField").value;
    guesses++;
    if (guess == answer) {
        alert(`You got it right! It took you ${guesses} guesses!`);
    } else if (guess < answer) {
        alert("Too low!");
    }else{
        alert("Too high!");
    }
}