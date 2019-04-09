function User(name, age, phone) {
    this.name = name;
    this.age = age;
    this.phone = phone;
}

var me = new User('Shawn', 18, '0900123456');
var coworker = new User('Koji', 20, '0911321321');

var demo1Node = document.getElementById('demo1');
demo1Node.textContent =
    'name: ' + me.name + ' age: ' + me.age + ' phone: ' + me.phone;

// 新增屬性(property)
me.nationality = 'Taiwan';

var demo2Node = document.getElementById('demo2');
demo2Node.textContent = JSON.stringify(me);

var demo3Node = document.getElementById('demo3');
demo3Node.textContent = JSON.stringify(coworker);

coworker.birthYear = function () {
    var year = new Date().getFullYear();
    return year - this.age;
}

var demo4Node = document.getElementById('demo4');
demo4Node.textContent = coworker.birthYear();

function UserType2(name, age, phone) {
    this.name = name;
    this.age = age;
    this.phone = phone;
    this.nationality = 'Taiwan';
    this.changeName = function (name) {
        this.name = name;
    }
}

var coworker2 = new UserType2('Ray', 19, '0922222222');
coworker2.changeName('Henry');

var demo5Node = document.getElementById('demo5');
demo5Node.textContent = JSON.stringify(coworker2);