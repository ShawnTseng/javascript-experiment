myFunction1();
function myFunction1() {
    var userName = 'Shawn';
    document.getElementById('demo1').innerHTML = typeof userName + ' ' + userName;
}
document.getElementById('demo2').innerHTML = typeof userName;

var userDept = 'Marketplace';
myFunction2();
function myFunction2() {
    document.getElementById('demo3').innerHTML = typeof userDept + ' ' + userDept;
}
document.getElementById('demo4').innerHTML = typeof userDept + ' ' + userDept;

myFunction3();
function myFunction3() {
    sex = 'male';
    document.getElementById('demo5').innerHTML = typeof sex + ' ' + sex;
}
document.getElementById('demo6').innerHTML = typeof sex + ' ' + sex;

var birthday = '1/1';
document.getElementById('demo7').innerHTML = window.birthday;