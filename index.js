var a = 3;
function myFunction1() {
    var a = 4;
    a = a * a;
}

function myFunction2() {
    a = a * a;
}

function myFunction3() {
    b = 5;
}

myFunction1();
document.getElementById('demo1').textContent = a;

myFunction2();
document.getElementById('demo2').textContent = a;

myFunction3();
document.getElementById('demo3').textContent = b;


var count1 = 0;
function myAdd1() {
    var count = 0;
    count += 1;
}

myAdd1();
myAdd1();
myAdd1();

// count 想要顯示 3, 但結果 count = 0, 因為這邊的 count 是全域變數
document.getElementById('demo4').textContent = count1;

function myAdd2() {
    var count = 0;
    count += 1;
    return count;
}

// count 想要顯示 1,2,3..., 但結果 count = 1,1,1...
document.getElementById('demo5').textContent = myAdd2();
document.getElementById('demo6').textContent = myAdd2();
document.getElementById('demo7').textContent = myAdd2();

function myAdd3() {
    var count = 0;
    function plus() {
        count += 1;
    }
    plus();
    return count;
}

document.getElementById('demo8').textContent = myAdd3();

var myAdd4 = (function () {
    var count = 0;
    return function () {
        count += 1;
        return count;
    }
})()
document.getElementById('demo9').textContent = myAdd4();
document.getElementById('demo10').textContent = myAdd4();
document.getElementById('demo11').textContent = myAdd4();