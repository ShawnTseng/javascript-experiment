const nodeList = document.querySelectorAll('p');
console.log(nodeList);

document.getElementById('demo1').textContent = nodeList[1].textContent;

document.getElementById('demo2').textContent = nodeList.length;