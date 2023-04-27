document.getElementById("submit").onclick = function () {
    let a, b, c;
    a = document.getElementById("aTextBox").value; a = Number(a);
    b = document.getElementById("bTextBox").value; b = Number(b);
    c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
    document.getElementById("cLabel").innerHTML = "Size c: "+ c;
}
