document.getElementById('demo1').textContent = window.document.head;
console.log(window.document.head);

document.getElementById('demo2').textContent = window.innerHeight;
document.getElementById('demo3').textContent = window.innerWidth;

var width = window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth;

var height = window.innerHeight
    || document.documentElement.clientHeight
    || document.body.clientHeight;

document.getElementById('demo4').textContent = width;

document.getElementById('demo5').textContent = height;