import { Item } from "./itemModule.js"

let boardContainer = document.getElementById("boardContainer");
let selectionContainer = document.getElementById("selectionContainer");

let board = [new Array(), new Array(), new Array(), new Array()];

let easySudukoBuilder = [[0, 1, 2, 3],
[2, 3, 1, 0],
[1, 0, 3, 2],
[3, 2, 0, 1]];

let items = [new Item(1),
new Item(2),
new Item(3),
new Item(4)];


// starting point
init();

//#region Functions

function init() {

    renderItems();
    let board = generateBoard();
    renderBoard(board);
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
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            board[i][j] = items[easySudukoBuilder[i][j]];
        }
    }
    return board;
}

function shuffle(array) {
    return array.sort((a, b) => 0.5 - Math.random())
}

function renderBoard(board) {
    let randomsArr = generateRandoms(4);

    for (let i = 0; i < board.length; i++) {
        boardContainer.innerHTML += `<div id="line-${i}" class="line">`;
        let line = document.getElementById(`line-${i}`);

        for (let j = 0; j < board[i].length; j++) {
            line.innerHTML += `
            <div id="item-${i}-${j}" class="item">
                <img  id="img-${i}-${j}" src="${board[i][j].Src}" data-correctId="${board[i][j].Id}" >
            </div>
            `

            let img = document.getElementById(`img-${i}-${j}`);
            img.style.visibility = "hidden"
            if (board[i][j].Id == randomsArr[i] + 1)
                img.style.visibility = ""
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

//#endregion









