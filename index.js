var result = '';
var i = 0;
while (i < 10) {
    result += i + ' ',
        i++;
}
document.getElementById('demo1').innerHTML = result;

var result = '';
var i = 0;
do {
    result += i + ' ',
        i++;
} while (i < 10);
document.getElementById('demo2').innerHTML = result;

var employee = ['Anne', 'Bob', 'Carter'];
var i = 0;
var result = '';
for (; employee[i];) {
    result += employee[i] + ' ';
    i++;
}
document.getElementById('demo3').innerHTML = result;

var employee = ['Anne', 'Bob', 'Carter'];
var i = 0;
var result = '';
while (employee[i]) {
    result += employee[i] + ' ';
    i++;
}
document.getElementById('demo4').innerHTML = result;