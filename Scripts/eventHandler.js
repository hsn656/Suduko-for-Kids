let groupId=localStorage.getItem("group");
let i = 0;
let j = 0;

function applyBorder(i, j) {
    document.getElementById(`item-${i}-${j}`).style.border = "3px solid black";
}

function deleteBorder(i, j) {
    document.getElementById(`item-${i}-${j}`).style.border = "";
}

applyBorder(i, j);

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
    if (img.style.visibility == "hidden") {
        document.getElementById(`item-${i}-${j}`).style.backgroundImage = `url(/images/Groups/${groupId}/${id}.png)`;
        document.getElementById(`item-${i}-${j}`).style.backgroundSize = "cover";
    }
}
document.addEventListener("keydown",function (event) {
    event = event || window.event;
    switch (event.keyCode) {
        case 49: //number 1
            selectNum(i, j, 1);
            break;
        case 50: //number 2
            selectNum(i, j, 2);
            break;
        case 51: //number 3
            selectNum(i, j, 3);
            break;
        case 52: //number 4
            selectNum(i, j, 4);
            break;

    }
});




