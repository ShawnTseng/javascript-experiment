function demo1click(demo1) {
    demo1.textContent = 'click event happen!';
}

function demo2click() {
    const date = new Date();
    document.getElementById('demo2').textContent = date;
}

document.getElementById('show-date').onclick = demo3click;

function demo3click() {
    const date = new Date();
    document.getElementById('demo3').textContent = date;
}

function pageOnLoad() {
    console.log('page on load');
}

function pageOnUnload() {
    console.log('page on unload');
}

function upperCase(input) {
    input.value = input.value.toUpperCase();
}

function hoverEvent(div) {
    div.textContent = 'Hover Me~~';
}

function outEvent(div) {
    div.textContent = 'Hi, please hover me!';
}