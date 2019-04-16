function myFunction(x, y) {
    console.log(this);
    return x * y;
}

function myFunction2() {
    return this;
}

document.getElementById('demo1').textContent = myFunction(2, 7);
document.getElementById('demo2').textContent = window.myFunction(2, 7);
document.getElementById('demo3').textContent = window.myFunction2();

const myObject = {
    name: 'Shawn',
    age: 18,
    basicInfo: function () {
        return 'name:' + this.name + ' age:' + this.age;
    }
}
document.getElementById('demo4').textContent = myObject.basicInfo();

function myFunction3(x, y) {
    this.x = x;
    this.y = y;
    console.log(this);
}

var myObj = new myFunction3(2, 3);

document.getElementById('demo5').textContent = myObj.x;