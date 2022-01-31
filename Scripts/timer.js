function checkIfFinished() {
    Checked = 0;
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            if (document.getElementById(`img-${i}-${j}`).style.visibility == "hidden") {
                if (document.getElementById(`item-${i}-${j}`).style.backgroundImage != "")
                    Checked++;
            }

        }
    }
    if (Checked == 12) {
        return `fall`;
    }

}

function convertSec(time) {
    // var min = Math.floor(sec / 60);
    // var seconds = sec % 60;
    // return `${min} : ${seconds}`;

    time = Math.round(time)
    let minutes = Math.floor(time / 60)
    let seconds = time - minutes * 60
    seconds = seconds < 10 ? "0" + seconds : seconds;

    return minutes + ":" + seconds
}


function setTimer() {
    let counter = 0;
    let remainTime = 60;
    let timer = document.getElementById("timer");
    timer.innerHTML = (convertSec(remainTime - counter));
    s = setInterval(function () {
        counter++;
        timer.innerHTML = (convertSec(remainTime - counter));
        if (counter == remainTime) {
            clearInterval(this.s);
            document.getElementById("alertx").style.display = "block";
            document.getElementById("playAgin").addEventListener("click", function () { location.reload(); });
            document.getElementById("goHome").addEventListener("click", function () { location.replace("../login.html"); });            
        }
        else if (checkIfFinished() == `fall` && checkIfWin() == "winer") {
            clearInterval(this.s);
            document.getElementById("alertx").style.display = "block";
            document.getElementById("finish").innerHTML = `You Win  ${localStorage.getItem("name")}`;
            document.getElementById("playAgin").addEventListener("click", function () { location.reload(); });
            document.getElementById("goHome").addEventListener("click", function () { location.replace("../login.html"); });
        }
        update(counter);
    }, 1000);
}
setTimer();

function checkIfWin() {
    let rowCounter = 0;
    let colCounter = 0;

    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {

            for (let k = j + 1; k < 4; k++) {
                currentRowItem = selectCell(i, k);
                if (selectCell(i, j) == currentRowItem) {
                    rowCounter++;
                }
            }
            for (let k = i + 1; k < 4; k++) {
                currentColItem = selectCell(k, j);
                if (selectCell(i, j) == currentColItem) {
                    colCounter++;
                }


            }
        }
    }
    if (rowCounter >= 1 && colCounter >= 1)
        return "loser";
    else
        return "winer";

}

function selectCell(i, j) {
    if (document.getElementById(`img-${i}-${j}`).style.visibility == "")
        item = document.getElementById(`img-${i}-${j}`).src.slice(21);
    else if (document.getElementById(`item-${i}-${j}`).style.backgroundImage != "")
        item = document.getElementById(`item-${i}-${j}`).style.backgroundImage.slice(5, -2);
    return item;
}

// function gameEnd(value) {

//     clearInterval(this.s);
//     document.getElementById("alertx").style.display = "block";
//     document.getElementById("finish").innerHTML = `You ${value}  ${localStorage.getItem("name")}`;
//     document.getElementById("playAgin").addEventListener("click", function () { location.reload(); });
//     document.getElementById("goHome").addEventListener("click", function () { location.replace("../login.html"); });

// }