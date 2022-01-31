function GetUsersHistory() {
    return JSON.parse((localStorage.getItem("history")));
}

function update(time) {
    let usersHistory=GetUsersHistory();
    let name = localStorage.getItem("name");
    let level = localStorage.getItem("level");
    let isWin = false;

    usersHistory[name] = {
        name: name,
        level: level,
        isWin: isWin,
        time:time
    };

    let string = JSON.stringify(usersHistory);

    localStorage.setItem("history", string);
    console.log("updated");
}

function getCurrentHistory(){
    let name = localStorage.getItem("name");
    return GetUsersHistory()[name]
}