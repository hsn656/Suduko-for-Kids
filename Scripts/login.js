window.addEventListener("load", function () {
    document.getElementById("name").focus();
});

document.getElementById("login").addEventListener("click", function () {
        
    if (document.getElementById("name").value=="") {
        document.getElementById("nameerror").style.display = "block";
        this.focus();
        this.select();
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


    
});