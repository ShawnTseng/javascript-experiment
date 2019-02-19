var nameList = ['Ben', 'Abby', 'Cosper', 'Duncan'];

document.getElementById('demo1').innerHTML = nameList;

document.getElementById('demo2').innerHTML = nameList.sort();

document.getElementById('demo3').innerHTML = nameList.sort().reverse();

var numberList = [47, 38, 96, 7, 15, 9];
var compareFunction = function(a, b) {
  return a - b
};

document.getElementById('demo4').innerHTML = numberList.sort(compareFunction);

var compareDescentFunction = function(a, b) {
  return b - a;
};
document.getElementById('demo5').innerHTML =
    numberList.sort(compareDescentFunction);

var randomFunction = function(a, b) {
  return 0.5 - Math.random();
};
document.getElementById('demo6').innerHTML = numberList.sort(randomFunction);

document.getElementById('demo7').innerHTML = Math.max.apply(null, numberList);

document.getElementById('demo8').innerHTML = Math.min.apply(null, numberList);

function getArrayMax(arr) {
  var len = arr.length;
  var max = -Infinity;
  while (len--) {
    if (arr[len] > max) {
      max = arr[len];
    }
  }
  return max;
}

document.getElementById('demo9').innerHTML = getArrayMax(numberList);

function getArrayMin(arr) {
  var len = arr.length;
  var min = Infinity;
  while (len--) {
    if (arr[len] < min) {
      min = arr[len];
    }
  }
  return min;
}

document.getElementById('demo10').innerHTML = getArrayMin(numberList);

var users = [
  {name: 'Ben', birth: 1992}, {name: 'Abby', birth: 1988},
  {name: 'Cosper', birth: 2000}, {name: 'Duncan', birth: 1976}
];

document.getElementById('demo10').innerHTML = JSON.stringify(users);

var sortByYear = function(a, b) {
  return a.birth - b.birth;
};

document.getElementById('demo11').innerHTML =
    JSON.stringify(users.sort(sortByYear));

var sortByName = function(a, b) {
  var x = a.name.toLowerCase();
  var y = b.name.toLowerCase();
  if (x < y) {
    return -1;
  } else if (x > y) {
    return 1;
  } else {
    return 0;
  }
}

document.getElementById('demo12').innerHTML =
    JSON.stringify(users.sort(sortByName));
