var x = 4;
document.getElementById('demo1').innerHTML = x == 7;
document.getElementById('demo2').innerHTML = x == 4;
document.getElementById('demo3').innerHTML = x == "4";

document.getElementById('demo4').innerHTML = x === 4;
document.getElementById('demo5').innerHTML = x === "4";

document.getElementById('demo6').innerHTML = x != 7;

document.getElementById('demo7').innerHTML = x !== 4;
document.getElementById('demo8').innerHTML = x !== "4";
document.getElementById('demo9').innerHTML = x !== 7;

document.getElementById('demo10').innerHTML = x > 7;
document.getElementById('demo11').innerHTML = x < 7;
document.getElementById('demo12').innerHTML = x >= 7;
document.getElementById('demo13').innerHTML = x <= 7;

var x = 6; var y = 3;
document.getElementById('demo14').innerHTML = (x < 10 && y > 1);
document.getElementById('demo15').innerHTML = (x == 5 || y == 5);
document.getElementById('demo16').innerHTML = !(x == y);

var role = "Leader";
var isLeader = (role === "Leader") ? true : false;
document.getElementById('demo17').innerHTML = isLeader;

document.getElementById('demo18').innerHTML = typeof (Number("12"));