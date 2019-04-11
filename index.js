var user = {
    name: 'Shawn',
    age: 18,
    language: 'zh-tw'
};

Object.defineProperty(user, 'language', { value: 'en' });

document.getElementById('demo1').textContent = user.language;

Object.defineProperty(user, 'language', { writable: false });

user.language = '123';

document.getElementById('demo2').textContent =
    "user.language = '123'; user.language = " + user.language;

Object.defineProperty(user, 'language', { enumerable: false });

document.getElementById('demo3').textContent =
    "Object.defineProperty(user, 'language', { enumerable: false }); Object.keys(user) = " + Object.keys(user);

Object.defineProperty(user, 'language', { configurable: false });

// 無作用, 因為 configurable = false
// Object.defineProperty(user, 'language', { get: function () { return language } });

document.getElementById('demo4').textContent = Object.getOwnPropertyNames(user);

document.getElementById('demo5').textContent = JSON.stringify(Object.getOwnPropertyDescriptor(user, 'name'));

function Person(name, age, language) {
    this.name = name;
    this.age = age;
    this.language = language;
};
var user2 = new Person('Koji', 20, 'jp');
console.log(Object.getPrototypeOf(user2));
document.getElementById('demo6').textContent = JSON.stringify(Object.getPrototypeOf(user2));

Object.preventExtensions(user2);

// 無作用, 因為 Object.preventExtensions
// Object.defineProperty(user2, 'nationality', { value: 'tw' });

document.getElementById('demo7').textContent = Object.isExtensible(user2);

Object.seal(user2);
user2.phone = '0900123456';
document.getElementById('demo8').textContent = JSON.stringify(user2); // phone 未加入，因為 seal

document.getElementById('demo9').textContent = Object.isSealed(user2);
Object.freeze(user2);
user2.name = 'test';
document.getElementById('demo10').textContent =
    "user2.name = 'test'; user2.name = " + user2.name;

document.getElementById('demo11').textContent = Object.isFrozen(user2);