
let i = 0;
let j = 0;

document.getElementById(`item-${i}-${j}`).style.border = "3px solid black";

document.onkeydown = function (event) {
    event = event || window.event;
    switch (event.keyCode) {
        case 37: //left
            //board[i][j].blur();
            document.getElementById(`item-${i}-${j}`).style.border = "";
            j--;
            if (j == -1) j = 3;
            //board[i][j].focus();
            document.getElementById(`item-${i}-${j}`).style.border = "3px solid black";

            break;
        case 39: //right      
            document.getElementById(`item-${i}-${j}`).style.border = "";
            j++;
            if (j == 4) j = 0;
            document.getElementById(`item-${i}-${j}`).style.border = "3px solid black";
            break;
        case 38: //up
            document.getElementById(`item-${i}-${j}`).style.border = "";
            i--;
            if (i == -1) i = 3;
            document.getElementById(`item-${i}-${j}`).style.border = "3px solid black";
            break;
        case 40: //down 
            document.getElementById(`item-${i}-${j}`).style.border = "";
            i++;
            if (i == 4) i = 0;
            document.getElementById(`item-${i}-${j}`).style.border = "3px solid black";
            break;
    }
};
