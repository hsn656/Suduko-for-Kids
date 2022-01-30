
document.getElementById("btn1").addEventListener("click", function () {
    localStorage.setItem("group", document.getElementById("btn1").value);
    location.assign("game.html");
});

document.getElementById("btn2").addEventListener("click", function () {
    localStorage.setItem("group", document.getElementById("btn2").value);
    location.assign("game.html");
});

document.getElementById("btn3").addEventListener("click", function () {
    localStorage.setItem("group", document.getElementById("btn3").value);
    location.assign("game.html");
});

document.getElementById("btn4").addEventListener("click", function () {
    localStorage.setItem("group", document.getElementById("btn4").value);
    location.assign("game.html");
});