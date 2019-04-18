'use strict';

var user = {
    fullName: function (phone, address) {
        let result = this.firstname + ' ' + this.lastName;
        if (phone) {
            result += ',' + phone;
        }
        if (address) {
            result += ',' + address;
        }
        return result;
    }
};

var me = {
    firstname: 'Tseng',
    lastName: 'Shawn'
}

var myCoworker = {
    firstname: 'Cho',
    lastName: 'Ray'
}

document.getElementById('demo1').textContent = user.fullName.apply(me);
document.getElementById('demo2').textContent = user.fullName.apply(myCoworker);
document.getElementById('demo3').textContent = user.fullName.apply(myCoworker, ['0900123456', 'Taiwan']);


var myObj = {
    myMethod: function () {
        console.log(this);
        console.log(arguments);
        return this + arguments;
    }
}
// 開關最上面的 use strict 觀察 this 的變化
document.getElementById('demo4').textContent = myObj.myMethod.apply(null, [1, 2, 3]);