var result = '';
for (let i = 0; i < 5; i++) {
    result += i + ' ';
}
document.getElementById('demo1').innerHTML = result;

var taiwan = { name: 'taiwan', quantity: '2300', year: '108' };

var result = '';
for (const property in taiwan) {
    if (taiwan.hasOwnProperty(property)) {
        const element = taiwan[property];
        result += property + ':' + element + ' ';
    }
}

document.getElementById('demo2').innerHTML = result;