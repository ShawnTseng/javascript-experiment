function myCount1(x, y) {
    return x * y;
}

var myCount2 = function (x, y) { return x * y };

document.getElementById('demo1').textContent = myCount1(2, 3);
document.getElementById('demo2').textContent = myCount2(2, 3);
document.getElementById('demo3').textContent = (function (x, y) {
    return x * y;
})(4, 7);

function myFunction(a) {
    console.log(arguments);
    return arguments.length;
}

document.getElementById('demo4').textContent = myFunction(1);
document.getElementById('demo5').textContent = myFunction.toString();

const myCount3 = (x, y) => { return x * y };
document.getElementById('demo6').textContent = myCount3(3, 2);