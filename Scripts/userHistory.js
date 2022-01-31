function GetUsersHistory() {
    return JSON.parse((localStorage.getItem("history")));
}

function updateHistory(time,isWin) {
    let usersHistory=GetUsersHistory();
    let name = localStorage.getItem("name");
    let level = localStorage.getItem("level");

    usersHistory[name] = {
        name: name,
        level: level,
        isWin: isWin,
        time:time
    };

    let string = JSON.stringify(usersHistory);

    localStorage.setItem("history", string);
}

function getCurrentHistory(){
    let name = localStorage.getItem("name");
    return GetUsersHistory()[name]
}