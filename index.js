var nameList = ['Anna', 'Bob', 'Carter', 'Daniel'];

document.getElementById('demo1').innerHTML = nameList.toString();

document.getElementById('demo2').innerHTML = nameList.join('*');

document.getElementById('demo3').innerHTML = nameList.pop();
document.getElementById('demo4').innerHTML = nameList;

document.getElementById('demo5').innerHTML = nameList.push('Emma');
document.getElementById('demo6').innerHTML = nameList;

document.getElementById('demo7').innerHTML = nameList.shift();
document.getElementById('demo8').innerHTML = nameList;

document.getElementById('demo9').innerHTML = nameList.unshift('Shawn');
document.getElementById('demo10').innerHTML = nameList;

nameList[2] = 'Ray';
document.getElementById('demo11').innerHTML = nameList;

delete nameList[1];
document.getElementById('demo12').innerHTML = nameList;

nameList.splice(2, 0, 'Kiki', 'Chris');
document.getElementById('demo13').innerHTML = nameList;

nameList.splice(1, 1);
document.getElementById('demo14').innerHTML = nameList;

var newNameList = ['Henry', 'Mary'];
document.getElementById('demo15').innerHTML = nameList.concat(newNameList);

document.getElementById('demo16').innerHTML = nameList.slice(1,5);