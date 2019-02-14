var a = 123;
var b = a.toExponential(2);
document.getElementById('demo1').innerHTML = b;

var a = 3.852;
var b = a.toFixed(2);
document.getElementById('demo2').innerHTML = b;

var a = 1.9584;
var b = a.toPrecision();
var c = a.toPrecision(2);
var d = a.toPrecision(4);
var e = a.toPrecision(6);
document.getElementById('demo3').innerHTML =
    b + '<br>' + c + '<br>' + d + '<br>' + e;

var a = '123';
document.getElementById('demo4').innerHTML = Number(a);

document.getElementById('demo5').innerHTML = Number(true);
document.getElementById('demo6').innerHTML = Number(false);
document.getElementById('demo7').innerHTML = Number('7.54');
document.getElementById('demo8').innerHTML = Number('Name');
document.getElementById('demo9').innerHTML = Number(new Date('2019-02-14'));

document.getElementById('demo10').innerHTML = parseInt("1.2 2 3");

document.getElementById('demo11').innerHTML = parseFloat("1.2 2 3");

document.getElementById('demo12').innerHTML = Number.MAX_VALUE;
document.getElementById('demo13').innerHTML = Number.MIN_VALUE;
document.getElementById('demo14').innerHTML = Number.POSITIVE_INFINITY;
document.getElementById('demo15').innerHTML = Number.NEGATIVE_INFINITY;
document.getElementById('demo16').innerHTML = Number.NaN;