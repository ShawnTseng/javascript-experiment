document.getElementById('demo2').textContent = document.getElementById('demo1').innerHTML;

document.getElementById('demo3').textContent = document.getElementById('demo1').firstChild.nodeValue;

document.getElementById('demo4').textContent = document.getElementById('demo1').childNodes[0].nodeValue;

document.getElementById('demo5').textContent = document.body;
console.log(document.body);

document.getElementById('demo6').textContent = document.documentElement;
console.log(document.documentElement);

document.getElementById('demo7').textContent = document.getElementById('demo7').nodeName;
