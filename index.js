var array = ['apple', 'banana', 'mango'];

// 不要在 for 迴圈的陳述式中取長度(每跑一次都會訪問一次陣列)
// for (let i = 0; i < array.length; i++) { }

// 事先取得長度
var arrayCount = array.length;
for (let i = 0; i < arrayCount; i++) { }

// 每次訪問demo1都使用這個變數，取代一直訪問DOM
var demo1 = document.getElementById('demo1');
demo1.innerHTML = 'Hi';