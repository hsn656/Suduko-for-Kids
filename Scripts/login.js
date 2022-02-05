window.addEventListener("load", function () {
    document.getElementById("name").focus();
});

 function login () {
        localStorage.playAgin="false";
    if (document.getElementById("name").value=="") {
        document.getElementById("nameerror").style.display = "block";
        document.getElementById("name").focus();
       // document.getElementById("name").select();
    }
    else {
        document.getElementById("nameerror").style.display = "none";
        localStorage.setItem("name", document.getElementById("name").value);
        localStorage.setItem("level", document.getElementById("level").value);
        if (localStorage.level=="level1") {
            location.assign("groupPage.html");
        }else
            location.assign("../game9x9.html");
    } 
}
document.getElementById("login").addEventListener("click",login)
window.addEventListener("keydown", function (event) {
    if(event.code==='Enter'){
        login();
    } 
});
