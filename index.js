function myFunction(a = 1, b = 2) {
    let i = 0;
    let sum = 0;
    for (i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}

function changeValue(obj) {
    obj.name = 'Koji';
    return obj;
}

var user = { name: 'Shawn' };

document.getElementById('demo1').textContent = myFunction(1, 2, 3, 4);
document.getElementById('demo2').textContent = JSON.stringify(user);
document.getElementById('demo3').textContent = JSON.stringify(changeValue(user));