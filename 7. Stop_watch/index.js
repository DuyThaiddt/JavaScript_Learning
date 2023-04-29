const timeDisplay = document.querySelector("#timeDisplay");
const startBt = document.querySelector("#startBt");
const pauseBt = document.querySelector("#pauseBt");
const resetBt = document.querySelector("#resetBt");
let startTime = 0;
let elapsedTime = 0;
let pause = true;
let intervalID;
let h = m = s = 0;
startBt.addEventListener("click", () => {
    if (pause) {
        pause = false;
        startTime = Date.now() - elapsedTime;
        intervalID = setInterval(updateTimer, 10);
    }
});
pauseBt.addEventListener("click", () => {
    if (!pause) {
        pause = true;
        elapsedTime = Date.now() - startTime;
        clearInterval(intervalID);
    }
});
resetBt.addEventListener("click", () => {
    pause = true;
    clearInterval(intervalID);
    startTime = 0;
    elapsedTime = 0;
    pause = true;
    intervalID;
    h = m = s = 0;
    timeDisplay.textContent = "00:00:00";
});
function updateTimer() {
    elapsedTime = Date.now() - startTime;
    s = formatZero(Math.floor(elapsedTime / 1000) % 60);
    m = formatZero(Math.floor(elapsedTime / 6000) % 60);
    h = formatZero(Math.floor(elapsedTime / 3600000) % 60);
    function formatZero(num) {
        num = num.toString();
        return num.length < 2 ? "0" + num : num;
    }
    timeDisplay.textContent = `${h}:${m}:${s}`;
}