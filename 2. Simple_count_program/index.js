let count = 0;
document.getElementById("decreaseBt").onclick = function () {
    count--;
    document.getElementById("countLabel").innerHTML = count;
}
document.getElementById("increaseBt").onclick = function () {
    count++;
    document.getElementById("countLabel").innerHTML = count;
}
document.getElementById("resetBt").onclick = function () {
    count = 0;
    document.getElementById("countLabel").innerHTML = count;
}







