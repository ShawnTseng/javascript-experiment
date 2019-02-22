document.getElementById('demo1').innerHTML =
    new Date(2019, 1, 22, 15, 30, 5, 5);
document.getElementById('demo2').innerHTML = new Date(2019, 1, 22, 15, 30, 5);
document.getElementById('demo3').innerHTML = new Date(2019, 1, 22, 15, 30);
document.getElementById('demo4').innerHTML = new Date(2019, 1, 22, 15);
document.getElementById('demo5').innerHTML = new Date(2019, 1, 22);
document.getElementById('demo6').innerHTML = new Date(2019, 1);

// 特別注意例外
document.getElementById('demo7').innerHTML = new Date(2019);

document.getElementById('demo8').innerHTML = new Date('2019/2/22');

document.getElementById('demo9').innerHTML = new Date(0);
document.getElementById('demo10').innerHTML = new Date(-999999999);

document.getElementById('demo11').innerHTML = new Date().toString();
document.getElementById('demo12').innerHTML =  new Date().toUTCString();
document.getElementById('demo13').innerHTML = new Date().toDateString();