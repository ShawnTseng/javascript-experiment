var user = {
    name: 'Shawn',
    age: 18
};
document.getElementById('demo1').innerHTML = JSON.stringify(user);

var user2 = Object();
user2.name = 'Shawn';
user2.age = 18;
document.getElementById('demo2').innerHTML = JSON.stringify(user2);

var user3 = user;
document.getElementById('demo3').innerHTML = JSON.stringify(user3);

user3.age = 20;
document.getElementById('demo4').innerHTML = JSON.stringify(user3);
document.getElementById('demo5').innerHTML = JSON.stringify(user);