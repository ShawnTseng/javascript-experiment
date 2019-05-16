// document.cookie = "userName=Shawn";
// document.cookie = "userName2=Shawn; expires=Thu, 18 Dec 2019 12:00:00 UTC";
// document.cookie = "userName3=Shawn; expires=Thu, 18 Dec 2019 12:00:00 UTC; path=/";
// console.log('cookie:' + document.cookie);
checkCookie();

function setCookie(cookieName, cookieValue, expireDays) {
    const date = new Date();
    date.setTime(date.getDate() + (expireDays * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = cookieName + "=" + cookieValue + ";" + expires + ";path=/";
}

function getCookie(cookieName) {
    const name = cookieName + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookieList = decodedCookie.split(';');
    for (let i = 0; i < cookieList.length; i++) {
        let element = cookieList[i];
        while (element.charAt(0) === ' ') {
            element = element.substring(1);
        }
        if (element.indexOf(name) === 0) {
            return element.substring(name.length, element.length);
        }
    }
    return "";
}

function checkCookie() {
    let userName = getCookie("userName");
    if (userName !== "") {
        alert("Hi," + userName);
    } else {
        userName = prompt("請輸入你的名字:", "");
        if (userName !== "" && userName !== null) {
            setCookie("userName", userName, 30);
        }
    }
}