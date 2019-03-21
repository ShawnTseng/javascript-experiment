var price = 50;
var quantity = 10;
var totalAmount = price * quantity; // 駝峰命名法, 運算符號前後空格

var itemList = ['Apple', 'Bread', 'Coffee']; // 注意逗號後方空格
function getItem(itemList, index) {
  return itemList[index]; // 空2格在前方
}
var apple = getItem(itemList, 0); // 一個陳述結束要用分號結尾

for (let i = 0; i < 10; i++) { // 空一格再加括號

  // 結尾括號放在新的一行, 後方不要有空白,後面不用加上分號
}

var user = { // 開頭括號在第一行結尾後方
  name: "Shawn", // 屬性名稱和值中間加上冒號和一個空白
  age: 18,
  eyeColor: "Black", // 屬性值若是字串加上引號在兩旁, 若是數值則不要加
  skinColor: "I am not sure"  // 最後一個屬性值組合後面不要加上逗號
  // 結尾括號放在新的一行, 後方不要有空白
  // 結尾括號後面要加上分號, 作為物件定義的結束
};

// 不要超過80個字元
document.getElementById('demo1').innerHTML =
  "213134564654897987979797975464fdda";

// 這兩行會取到不同結果, html的命名請和javascript一致
var obj1 = document.getElementById('demo1');
var obj2 = document.getElementById('Demo1');