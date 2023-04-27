
document.getElementById("submitBt").onclick = function () {
    let temp;
    let input = Number(document.getElementById("temperature").value);
    let c = document.getElementById("cBt");
    let f = document.getElementById("fBt");
    if (c.checked) {
        document.getElementById("temperature1").innerHTML = toFahrenheit(input) + " F";
    } else if (f.checked) {
        document.getElementById("temperature1").innerHTML = toCelsius(input) + " C";
    }


}

function toFahrenheit(temp) {
    return temp * 9 / 5 + 32;
}
function toCelsius(temp) {
    return (temp - 32) * 5 / 9;
}
