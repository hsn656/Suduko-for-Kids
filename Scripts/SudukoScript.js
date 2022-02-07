let boardContainer = document.getElementById("boardContainer");
let selectionContainer = document.getElementById("selectionContainer");
// document.getElementById("userName").innerHTML=`welcome ${localStorage.getItem("name")}`;



let easySudukoBuilder = [[0, 1, 2, 3],
[2, 3, 1, 0],
[1, 0, 3, 2],
[3, 2, 0, 1]];

let storedGroup = localStorage.getItem('group');


//#region variables for test
let hardSudukoBuilder = [
    [0, 1, 2, 3, 4, 5, 6, 7, 8],
    [3, 4, 5, 6, 7, 8, 0, 1, 2],
    [6, 7, 8, 0, 1, 2, 3, 4, 5],
    [1, 2, 0, 4, 5, 3, 7, 8, 6],
    [4, 5, 3, 7, 8, 6, 1, 2, 0],
    [7, 8, 6, 1, 2, 0, 4, 5, 3],
    [2, 0, 1, 5, 3, 4, 8, 6, 7],
    [5, 3, 4, 8, 6, 7, 2, 1, 0],
    [8, 6, 7, 2, 1, 0, 5, 3, 4]
];
let level = localStorage.level;
let itemsLength = level == "level2" ? 9 : 4;
let builder = level == "level2" ? hardSudukoBuilder : easySudukoBuilder;
storedGroup = level == "level2" ? 5 : storedGroup;
let board = [];
for (let i = 0; i < itemsLength; i++) {
    board.push([]);
}
//#endregion



let items = getItems();


// entry point
init();



//#region Functions

function getItems() {
    let items = [];
    for (let i = 1; i < itemsLength + 1; i++) {
        items.push(new Item(i, storedGroup))
    }
    return items;
}

function init() {
    renderItems();
    board = generateBoard();
    console.log(board);
    if (items.length === 9)
        renderBoardTwo(board);
    else
        renderBoardOne(board);
}

function renderItems() {
    selectionContainer.innerHTML += `<div id="selectionLine" class="line">`;
    let line = document.getElementById(`selectionLine`);
    for (let i = 0; i < items.length; i++) {
        line.innerHTML += `
            <div class="item">
                <img src="${items[i].Src}" >
                <p>${i + 1}</p>  
            </div>
            `
    }

}

function generateBoard() {
    shuffle(items);
    for (let i = 0; i < items.length; i++) {
        for (let j = 0; j < items.length; j++) {
            board[i][j] = items[builder[i][j]];
        }
    }
    return board;
}

function shuffle(array) {
    return array.sort((a, b) => 0.5 - Math.random())
}


function renderBoardOne(board) {
    let randomsArr = generateRandoms(4);
    for (let i = 0; i < board.length; i++) {
        boardContainer.innerHTML += `<div id="line-${i}" class="line">`;
        let line = document.getElementById(`line-${i}`);

        for (let j = 0; j < board[i].length; j++) {
            line.innerHTML += `
            <div id="item-${i}-${j}" class="item">
                <img  id="img-${i}-${j}" src="${board[i][j].Src}" data-current="0" data-correctId="${board[i][j].Id}" >
            </div>
            `

            let img = document.getElementById(`img-${i}-${j}`);
            let div = document.getElementById(`item-${i}-${j}`);

            img.style.visibility = "hidden";
            if (Math.random() > .6) {
                img.style.visibility = "";
                div.classList.add("initialized");
                img.dataset.current = board[i][j].Id;
            }

        }
    }
}

function renderBoardTwo(board) {
    let randomsArr = generateRandoms(items.length);

    for (let i = 0; i < board.length; i++) {
        boardContainer.innerHTML += `<div id="line-${i}" class="line">`;
        let line = document.getElementById(`line-${i}`);

        for (let j = 0; j < board[i].length; j++) {
            line.innerHTML += `
            <div id="item-${i}-${j}" class="item">
                <img  id="img-${i}-${j}" src="${board[i][j].Src}" data-current="0" data-correctId="${board[i][j].Id}" >
            </div>
            `

            let img = document.getElementById(`img-${i}-${j}`);
            let div = document.getElementById(`item-${i}-${j}`);

            img.style.visibility = "hidden";
            if (Math.random() > .1) {
                img.style.visibility = "";
                div.classList.add("initialized");
                img.dataset.current = board[i][j].Id;
            }

            //to make borders for 9x9
            if ((i + 1) % 3 == 0 && i != items.length - 1)
                div.classList.add("border-bottom")

            if ((j + 1) % 3 == 0 && j != items.length - 1)
                div.classList.add("border-right")

        }
    }
}

function generateRandoms(length) {
    let randomsArr = [];
    let random;
    for (let i = 0; i < length; i++) {
        do {
            random = Math.floor((Math.random() * length));
        } while (randomsArr.includes(random));
        randomsArr.push(random)
    }

    return randomsArr;
}

let hintImg = 0;

document.getElementById("hintBtn").addEventListener("click", function () {
    if (hintImg < 3) 
    {
        let oldarr = document.querySelectorAll("[data-current ]");
        newarr = [];
        let counter = 0;
        for (let i = 0; i < oldarr.length; i++)
        {
            if (oldarr[i].dataset.current != '0' && oldarr[i].dataset.current != oldarr[i].dataset.correctid) {
                newarr[counter] = oldarr[i];
                counter++;
            }
        }
        if (newarr.length != 0) {
            newarr[0].parentElement.classList.add("wrong");
            hintImg++;

            setTimeout(() => {
                newarr[0].parentElement.classList.remove("wrong");
            }, 3000);
        }

    }
    else 
    {
        document.getElementById("hint_span").style.visibility = 'visible';
    }

    


});


//#endregion









