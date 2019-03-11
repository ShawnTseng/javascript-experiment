// var emailPattern = '[a-zA-Z0-9]+@[a-zA-Z0-9.]+';
// var modifiers = 'i'; // ignoreCase
// var regExp = '/' + emailPattern + '/' + modifiers;
// [a-zA-Z0-9]+ 至少一個小寫字母或大小字母或0~9
// @ 再接上@
// [a-zA-Z0-9.]+ 至少一個小寫字母或大小字母或0~9或.
// g 全域搜尋
var regExp = /[a-zA-Z0-9]+@[a-zA-Z0-9.]+/g;

var email1 = 'shawntseng40@gmail.com';

document.getElementById('demo1').innerHTML = email1;
document.getElementById('demo2').innerHTML = regExp.test(email1);

var email2 = 'shawntseng40';

document.getElementById('demo3').innerHTML = email2;
document.getElementById('demo4').innerHTML = regExp.test(email2);

var email3 = '@gmail.com';

document.getElementById('demo5').innerHTML = email3;
document.getElementById('demo6').innerHTML = regExp.test(email3);