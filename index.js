document.getElementById('demo1').innerHTML = Math.PI;

document.getElementById('demo2').innerHTML = Math.round(8.7);
document.getElementById('demo3').innerHTML = Math.round(8.5);
document.getElementById('demo4').innerHTML = Math.round(8.4);

document.getElementById('demo5').innerHTML = Math.pow(7, 3);

document.getElementById('demo6').innerHTML = Math.sqrt(16);

document.getElementById('demo7').innerHTML = Math.abs(-87);

document.getElementById('demo8').innerHTML = Math.ceil(3.5);

document.getElementById('demo9').innerHTML = Math.floor(3.5);

document.getElementById('demo10').innerHTML = Math.sin(90 * Math.PI / 180);

document.getElementById('demo11').innerHTML = Math.cos(180 * Math.PI / 180);

var numberList = [0, 99, -28, 54, 1, -180];

document.getElementById('demo12').innerHTML = numberList;
document.getElementById('demo13').innerHTML = Math.min(...numberList);
document.getElementById('demo14').innerHTML = Math.max(...numberList);

document.getElementById('demo15').innerHTML = Math.random();
