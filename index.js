var now = new Date().getHours();
var result = "";
if (now < 12) {
    result = "morn";
} else if (now < 18) {
    result = "after noon";
} else {
    result = "leisure time";
}
document.getElementById('demo1').innerHTML = result;