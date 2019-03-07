var result = '';
for (let i = 0; i < 10; i++) {
    if (i === 3) {
        break;
    }
    result += i + ' ';
}
document.getElementById('demo1').innerHTML = result;

var result = '';
for (let i = 0; i < 10; i++) {
    if (i === 3) {
        continue;
    }
    result += i + ' ';
}
document.getElementById('demo2').innerHTML = result;

var result = '';
loop1:
for (let i = 0; i < 3; i++) {
    loop2:
    for (let j = 0; j < 3; j++) {
        if (i === 1 && j === 1) {
            break loop1;
        }
        result += i + ',' + j + '<br>';
    }
}
document.getElementById('demo3').innerHTML = result;

var result = '';
loop1:
for (let i = 0; i < 3; i++) {
    loop2:
    for (let j = 0; j < 3; j++) {
        if (i === 1 && j === 1) {
            continue loop1;
        }
        result += i + ',' + j + '<br>';
    }
}
document.getElementById('demo4').innerHTML = result;