
let i = 0;
let j = 0;

document.getElementById(`item-${i}-${j}`).style.border = "3px solid black";

document.onkeydown = function (event) {
    event = event || window.event;
    switch (event.keyCode) {
        case 37: //left
            document.getElementById(`item-${i}-${j}`).style.border = "";
            j--;
            if (j == -1) j = 3;
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


document.onkeypress = function (event) {
    event = event || window.event;
    let img1 = document.getElementById(`img-${i}-${j}`)
    switch (event.keyCode) {
        case 49: //number 1
            if (img1.style.visibility == "hidden") {
                document.getElementById(`item-${i}-${j}`).style.backgroundImage = "url('/images/Groups/1/1.png')";
                document.getElementById(`item-${i}-${j}`).style.backgroundSize = "cover";
            }
            break;
        case 50: //number 2
            if (img1.style.visibility == "hidden") {
                document.getElementById(`item-${i}-${j}`).style.backgroundImage = "url('/images/Groups/1/2.png')";
                document.getElementById(`item-${i}-${j}`).style.backgroundSize = "cover";
            }
            break;
        case 51: //number 3
            if (img1.style.visibility == "hidden") {
                document.getElementById(`item-${i}-${j}`).style.backgroundImage = "url('/images/Groups/1/3.png')";
                document.getElementById(`item-${i}-${j}`).style.backgroundSize = "cover";
            }
            break;
        case 52: //number 4
            if (img1.style.visibility == "hidden") {
                document.getElementById(`item-${i}-${j}`).style.backgroundImage = "url('/images/Groups/1/4.png')";
                document.getElementById(`item-${i}-${j}`).style.backgroundSize = "cover";
            }
            break;

    }
};




