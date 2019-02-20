var numberList = [98, 67, 1, 13, 5];
var result = '';
var callbackFunction = function callbackFunction(value, index, array) {
  result += value + ',';
};
numberList.forEach(callbackFunction);

document.getElementById('demo1').innerHTML = result;

callbackFunction = function callbackFunction(value, index, array) {
  return value * 2;
};
document.getElementById('demo2').innerHTML = numberList.map(callbackFunction);

callbackFunction = function callbackFunction(value, index, array) {
  return value > 13;
};
document.getElementById('demo3').innerHTML =
    numberList.filter(callbackFunction);

var initialValue = 10000;
callbackFunction = function callbackFunction(
    previousValue, currentValue, index, array) {
  return previousValue += currentValue;
};
document.getElementById('demo4').innerHTML =
    numberList.reduce(callbackFunction, initialValue);

var initialValue = 50000;
callbackFunction = function callbackFunction(
    previousValue, currentValue, index, array) {
  return previousValue += currentValue;
};
document.getElementById('demo5').innerHTML =
    numberList.reduceRight(callbackFunction, initialValue);

callbackFunction = function callbackFunction(value, index, array) {
  return value > 20;
};
document.getElementById('demo6').innerHTML = numberList.every(callbackFunction);

callbackFunction = function callbackFunction(value, index, array) {
  return value > 20;
};
document.getElementById('demo7').innerHTML = numberList.some(callbackFunction);

document.getElementById('demo8').innerHTML = numberList.indexOf(1);

document.getElementById('demo9').innerHTML = numberList.lastIndexOf(1);

callbackFunction = function callbackFunction(value, index, array) {
  return value < 20;
};
document.getElementById('demo10').innerHTML = numberList.find(callbackFunction);

callbackFunction = function callbackFunction(value, index, array) {
  return value < 20;
};
document.getElementById('demo11').innerHTML = numberList.findIndex(callbackFunction);
