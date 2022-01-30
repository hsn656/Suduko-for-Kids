// let userName = document.getElementById("name").value;
// let userLevel = document.getElementById("level").value;

window.addEventListener("load", function () {
    document.getElementById("name").focus();
    document.getElementById("level").addEventListener("change",function(){
    localStorage.setItem("level", document.getElementById("level").value);
    });

});

document.getElementById("login").addEventListener("click", function () {
        
    if (document.getElementById("name").value=="") {
        document.getElementById("nameerror").style.display = "block";
        this.focus();
        this.select();
    }
    else {
        document.getElementById("nameerror").style.display = "none";
    }
    localStorage.setItem("name", document.getElementById("name").value);

    location.assign("groupPage.html");
});