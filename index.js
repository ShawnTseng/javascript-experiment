function User(name, age, phone) {
    this.name = name;
    this.age = age;
    this.phone = phone;
}

var me = new User('Shawn', 18, '0900123456');
var coworker = new User('Koji', 20, '0911321321');

// 所有使用者增加國籍的屬性
User.prototype.nationality = 'Taiwan';

// 所有使用者增加取得出生年份的方法
User.prototype.birthYear = function () {
    var year = new Date().getFullYear();
    return year - this.age;
}

document.getElementById('demo1').textContent = me.nationality;
document.getElementById('demo2').textContent = coworker.nationality;
document.getElementById('demo3').textContent = me.birthYear();
document.getElementById('demo4').textContent = coworker.birthYear();
