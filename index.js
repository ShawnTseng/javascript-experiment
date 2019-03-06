var week = new Date().getDay();
var displayWeek = '';
switch (week) {
    case 1:
        displayWeek = "星期一";
        break;
    case 2:
    case 3:
        displayWeek = "星期二或星期三";
        break;
    case 4:
        displayWeek = "星期四";
        break;
    case 5:
        displayWeek = "星期五";
        break;
    default:
        // 1,6
        displayWeek = "周末";
        break;
}
document.getElementById('demo1').innerHTML = displayWeek;