document.getElementById('demo1').innerHTML = 'Test Id = demo1';

var demo2 = document.getElementsByClassName('demo2');
Array.prototype.forEach.call(demo2, function (element) {
    element.innerHTML = 'Test Class name = demo2';
});

var p = document.getElementsByTagName('p');
Array.prototype.forEach.call(p, function (element) {
    element.innerHTML = 'Test tag = p';
});

var demo3 = document.getElementById('demo3');
demo3.innerHTML = '<h1>Headline</h1>';
demo3.title = 'Test Show Title, the id has been changed successfully.';
demo3.style.backgroundColor = 'Yellow';
demo3.setAttribute('id', 'demo3-2');

var demo4 = document.getElementById('demo4');

var h2 = document.createElement('h2');
h2.innerText = '123';

demo4.appendChild(h2);

var button = document.createElement('button');
button.innerText = 'remove 123';
button.onclick = () => {
    var isExist = demo4.contains(h2);
    if (isExist) {
        demo4.removeChild(h2);
    }
}

demo4.appendChild(button);

var button2 = document.createElement('button');
button2.innerText = 'Add !';
button2.onclick = () => {
    demo3.innerHTML += '!';
}
demo4.appendChild(button2);

document.write('Test');
