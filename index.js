const div1 = document.createElement('div');
const text1 = document.createTextNode('This is my div.');
div1.appendChild(text1);
document.body.appendChild(div1);

const text2 = document.createTextNode('This is my second setence.');
div1.insertBefore(text2, text1);

text1.parentNode.removeChild(text1);

const text3 = document.createTextNode('My new text3.');
div1.replaceChild(text3, text2);