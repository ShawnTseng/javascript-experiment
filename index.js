// 設定 y 的預設值
function count(x, y = 5) {
    return x + y;
}
document.getElementById('demo1').innerHTML = count(2);

document.getElementById('demo2').innerHTML = Number.EPSILON;
document.getElementById('demo3').innerHTML = Number.MIN_SAFE_INTEGER;
document.getElementById('demo4').innerHTML = Number.MAX_SAFE_INTEGER;

document.getElementById('demo5').innerHTML = Number.isInteger(87);
document.getElementById('demo6').innerHTML = Number.isSafeInteger(87);
document.getElementById('demo7').innerHTML = Number.isSafeInteger(98765432109876543210);

document.getElementById('demo8').innerHTML = isFinite(1 / 0);
document.getElementById('demo9').innerHTML = isFinite(2 / 1);

document.getElementById('demo10').innerHTML = isNaN("Test");

const myCount = (x, y = 5) => { return x + y };

document.getElementById('demo11').innerHTML = myCount(2);