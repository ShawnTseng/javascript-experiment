var seed = Math.random();
document.getElementById('demo1').innerHTML = seed;

document.getElementById('demo2').innerHTML = Math.floor(seed * 10);

document.getElementById('demo3').innerHTML = Math.floor(seed * 11);

document.getElementById('demo4').innerHTML = Math.floor(seed * 100);

document.getElementById('demo5').innerHTML = Math.floor(seed * 101);

document.getElementById('demo6').innerHTML = Math.floor(seed * 10) + 1;

document.getElementById('demo7').innerHTML = Math.floor(seed * 100) + 1;

function getRndInteger(min, max) {
    return Math.floor(seed * (max - min)) + min;
}

function getRndInteger2(min, max) {
    return Math.floor(seed * (max - min + 1)) + min;
}

document.getElementById('demo8').innerHTML = getRndInteger(1, 10);

document.getElementById('demo9').innerHTML = getRndInteger2(1, 10);