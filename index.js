try {
  const PI = 3.14159;
  PI = 3.14; // 不可重新設值  
} catch (e) {
  document.getElementById('demo1').innerHTML = e;
}

const employee = { name: 'Shawn', dept: 'MKPL', age: 18 };
employee.name = 'Ray';
document.getElementById('demo2').innerHTML = employee.name;
try {
  employee = { name: 'Ray', dept: 'MKPL', age: 30 };
} catch (e) {
  document.getElementById('demo3').innerHTML = e;
}

const fruits = ['Apple', 'Banana'];
fruits.push('Watermelon');
document.getElementById('demo4').innerHTML = fruits;
try {
  fruits = ['Apple', 'Banana', 'Watermelon'];
} catch (e) {
  document.getElementById('demo5').innerHTML = e;
}