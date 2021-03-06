function GetUsersHistory() {
    let result = JSON.parse((localStorage.getItem("history")));
    return result ? result : {};
}

function userHistory() {
    let userlogined = localStorage.getItem("name");
    let IsWinResult = (GetUsersHistory()[userlogined])['isWin'];
    let TimeResult = (GetUsersHistory()[userlogined])['time'];
    return [IsWinResult , TimeResult] ;
}

function updateHistory(time, isWin) {
    let usersHistory = GetUsersHistory();
    let name = localStorage.getItem("name");
    let level = localStorage.getItem("level");

    usersHistory[name] = {
        name: name,
        level: level,
        isWin: isWin,
        time: time
    };

    let string = JSON.stringify(usersHistory);

    localStorage.setItem("history", string);

}

function getCurrentHistory() {
    let name = localStorage.getItem("name");
    return GetUsersHistory()[name]
}