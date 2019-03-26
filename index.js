var name = "             Shawn             ";
document.getElementById('demo1').innerHTML = name;
document.getElementById('demo2').innerHTML = name.trim();

var user = { name: 'Shawn', age: 18, dept: 'MKPL' };
document.getElementById('demo3').innerHTML = JSON.stringify(user);

document.getElementById('demo4').innerHTML = Date.now();

var order = {
    name: 'electronic',
    price: 500,
    unit: 'NT',
    makeDate: '2019-03-26',
    get item() {
        return this.name + " " + this.unit + " " + this.price;
    },
    get make_date() {
        return this.makeDate;
    }
}
document.getElementById('demo5').innerHTML = order.item;
document.getElementById('demo6').innerHTML = order.make_date;
order.make_date = "2019-01-01";
document.getElementById('demo7').innerHTML = order.make_date;

var myStore = {
    name: '7-11',
    locate: 'Taichung'
}

Object.defineProperty(myStore, "time", {
    value: '24hr',
    writable: true,
    enumerable: true,
    configurable: true
});

document.getElementById('demo8').innerHTML = JSON.stringify(myStore);

Object.defineProperty(myStore, "member", {
    value: 5,
    writable: true,
    enumerable: false, // false
    configurable: true
});

document.getElementById('demo9').innerHTML = JSON.stringify(myStore);

Object.defineProperty(myStore, "locate", {
    get: function () { return locate },
    set: function (value) { locate = value.toUpperCase() }
});
myStore.locate = 'tw';
document.getElementById('demo10').innerHTML = JSON.stringify(myStore);

var myName = "Shawn";
document.getElementById('demo11').innerHTML = myName.charAt(0);
document.getElementById('demo12').innerHTML = myName[1]; // 只能 get 不能 set

document.getElementById('demo13').innerHTML = "Hello \
World";

