document.getElementById('button1').addEventListener('click', showDate);
function showDate() {
    const date = new Date();
    document.getElementById('demo1').textContent = date;
}

const button2 = document.getElementById('button2');
button2.addEventListener('click', helloWorld);
function helloWorld() {
    alert('Hello World');
}
button2.addEventListener('click', helloWorld2);
function helloWorld2() {
    alert('Hello 222');
}

button2.addEventListener('mouseover', mouseOver);
button2.addEventListener('mouseout', mouseOut);

const div2 = document.getElementById('demo2');
function mouseOver() {
    div2.textContent = 'mouse over';
}
function mouseOut() {
    div2.textContent = 'mouse out';
}

window.addEventListener('resize', checkResize);
function checkResize() {
    document.getElementById('demo3').textContent = Math.random();
}

x = 9;
y = 4;
document.getElementById('button3').addEventListener('click', function () {
    myFunction(x, y);
})
function myFunction(p1, p2) {
    document.getElementById('demo4').textContent = p1 * p2;
}

document.getElementById('outer1').addEventListener('click', outFunction);
document.getElementById('inner1').addEventListener('click', inFunction);
document.getElementById('outer2').addEventListener('click', outFunction, true);
document.getElementById('inner2').addEventListener('click', inFunction, true);
function outFunction() {
    alert('out!');
}
function inFunction() {
    alert('in!');
}

document.getElementById('button4').onclick = removeHandler;
function removeHandler() {
    button2.removeEventListener('mouseover', mouseOver);
    button2.removeEventListener('mouseout', mouseOut);
}