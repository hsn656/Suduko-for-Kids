let time = 60;
let timer = document.getElementById("timer");
let timerInterval;
let counter=0;

function setTimer() {
    console.log(111);
    timer.innerHTML = convertToSec(time--);
    timerInterval = setInterval(() => {
        if (time>-1) {
            timer.innerHTML = convertToSec(time--);
            updateHistory(counter++,false);
        }else{
            gameEnd("failed");
        }
    }, 1000)
}


// function checkIfFinished() {
//     Checked = 0;
//     for (let i = 0; i < 4; i++) {
//         for (let j = 0; j < 4; j++) {
//             if (document.getElementById(`img-${i}-${j}`).style.visibility == "hidden") {
//                 if (document.getElementById(`item-${i}-${j}`).style.backgroundImage != "")
//                     Checked++;
//             }

//         }
//     }
//     if (Checked == 12) {
//         return `fall`;
//     }

// }

function convertToSec(time) {

    time = Math.floor(time)
    let minutes = Math.floor(time / 60)
    let seconds = time - minutes * 60
    seconds = seconds < 10 ? "0" + seconds : seconds;

    return minutes + ":" + seconds
}


function checkIfWin(){
    let arr=document.querySelectorAll("[data-current]");
    for (let i = 0; i < arr.length; i++) {
        if(arr[i].dataset.current!=arr[i].dataset.correctid)
            return false
    }
    return true;
}


// function selectCell(i, j) {
//     if (document.getElementById(`img-${i}-${j}`).style.visibility == "")
//         return document.getElementById(`img-${i}-${j}`).src.slice(21);
//     else if (document.getElementById(`item-${i}-${j}`).style.backgroundImage != "")
//         return document.getElementById(`item-${i}-${j}`).style.backgroundImage.slice(5, -2);

// }

function gameEnd(value) {

    clearInterval(timerInterval);
    document.getElementById("alertx").style.display = "block";
    document.getElementById("finish").innerHTML = `You ${value},  ${localStorage.getItem("name")}`;
    document.getElementById("playAgin").addEventListener("click", function () { location.reload();});
    document.getElementById("goHome").addEventListener("click", function () { location.replace("../login.html"); });

}