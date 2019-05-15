const demo1 = document.getElementById('demo1');
const demo2 = document.getElementById('demo2');
let myTimeHandler;
let myTimeHandler2;

function addExclamationMark(node) {
    if (node) {
        node.textContent += '!';
    }
}

function addWaveMark(node) {
    if (node) {
        node.textContent += '~';    
    }    
}

function timeStart() {
    myTimeHandler = window.setTimeout(addExclamationMark, 1000, demo1);
}

function timeStop() {
    if (myTimeHandler) {
        window.clearInterval(myTimeHandler);
    }
}

function timeStartContinuous() {
    myTimeHandler2 = window.setInterval(addWaveMark, 1000, demo2);
}

function timeStopContinuous() {
    if (myTimeHandler2) {
        window.clearInterval(myTimeHandler2);
    }
}