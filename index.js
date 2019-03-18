// "use strict"; // demo4請開啟
var user = {
    name: 'Shawn',
    getUser: function () {
        return this.name;
    }
}
document.getElementById('demo1').innerHTML = user.getUser();

document.getElementById('demo2').innerHTML = this;

function myFunction1() {
    return this;
}
document.getElementById('demo3').innerHTML = myFunction1();

function myFunction2() {
    return this;
}
document.getElementById('demo4').innerHTML = myFunction2();

function onClick(e) {
    document.getElementById('demo5').innerHTML = e;
}

var user2 = {
    name: 'Ray'
}
document.getElementById('demo6').innerHTML = user.getUser.call(user2);