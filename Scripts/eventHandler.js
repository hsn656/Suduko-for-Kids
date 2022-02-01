let groupId = localStorage.getItem("group");
let originalItems = getItems();
let i = 0;
let j = 0;

function applyBorder(i, j) {
    document.getElementById(`item-${i}-${j}`).style.border = "3px solid #db3e39";
}

function deleteBorder(i, j) {
    document.getElementById(`item-${i}-${j}`).style.border = "";
}

applyBorder(i, j);

const emoji = String.fromCodePoint(0x1F604);

function welcome() {
    document.getElementById("welcome").innerHTML = `Welcome ya ${localStorage.getItem("name")} ${emoji}`;
    document.getElementById("start").addEventListener("click", function () {
        document.getElementById("welcomeAlert").style.display = "none";
        setTimer();
    });

    document.getElementById("Home").addEventListener("click", function () { location.replace("../login.html"); });
}
welcome();



document.onkeydown = function (event) {
    event = event || window.event;
    switch (event.keyCode) {
        case 37: //left
            deleteBorder(i, j);
            j--;
            if (j == -1) j = 3;
            applyBorder(i, j);
            break;
        case 39: //right      
            deleteBorder(i, j);
            j++;
            if (j == 4) j = 0;
            applyBorder(i, j);
            break;
        case 38: //up
            deleteBorder(i, j);
            i--;
            if (i == -1) i = 3;
            applyBorder(i, j);
            break;
        case 40: //down 
            deleteBorder(i, j);
            i++;
            if (i == 4) i = 0;
            applyBorder(i, j);
            break;
    }
};

function selectNum(i, j, id) {
    let img = document.getElementById(`img-${i}-${j}`)
    if (!img.parentElement.classList.contains("initialized")) {
        img.src = originalItems[id - 1].Src;
        img.dataset.current = originalItems[id - 1].Id;
        img.style.visibility = "";

    }
}

document.addEventListener("keydown", function (event) {
    event = event || window.event;
    let code = event.code;
    let id = code[code.length - 1];
    if (id < 5 && id > 0)
        selectNum(i, j, id);
    if (checkIfWin()){
        gameEnd("succeeded");
        updateHistory(counter++,true);
    }
});




