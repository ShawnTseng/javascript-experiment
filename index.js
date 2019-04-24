var demo1 = document.getElementById('demo1');
demo1.textContent = 'Find element by id';

var demo1_2 = document.getElementById('demo1_2');
console.log(demo1_2);
document.getElementById('demo2').textContent = demo1_2;

var main = document.getElementById('main');
var paragraphCollection = main.getElementsByTagName('p');
Array.prototype.forEach.call(paragraphCollection, function (p) {
    p.textContent = 'This is p';
});

var myItemCollection = document.getElementsByClassName('item');
Array.prototype.forEach.call(myItemCollection, function (item) {
    item.textContent = 'This is item';
});

var myItemCollection2 = document.querySelectorAll('span.item');
Array.prototype.forEach.call(myItemCollection2, function (item) {
    item.style.backgroundColor = 'pink';
});

var form = document.forms['form1'];
var demo3 = document.getElementById('demo3');
for (let i = 0; i < form.length; i++) {
    demo3.textContent += form.elements[i].value + ',';
}