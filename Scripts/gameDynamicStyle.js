if(localStorage.level=="level1"){
    document.head.innerHTML+=`<link rel="stylesheet" href="./styles/4x4.css">`
}else if (localStorage.level=="level2") {
    document.head.innerHTML+=`<link rel="stylesheet" href="./styles/9x9.css">`
} else {
    alert("please login first");
}
