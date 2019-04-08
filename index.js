var user = {
    name: 'Shawn',
    firstName: 'Tseng',
    age: 18,
    get fullName() {
        return this.name + ' ' + this.firstName;
    },
    set setFirstName(firstName) {
        this.firstName = firstName;
    }
};

var countNode = document.createTextNode(user.fullName);
var demo1 = document.getElementById('demo1');
demo1.appendChild(countNode);

user.setFirstName = 'Sanada';
var countNode = document.createTextNode(user.firstName);
var demo2 = document.getElementById('demo2');
demo2.appendChild(countNode);

var counter = {
    count: 0,
    get reset() {
        this.count = 0;
    },
    get increment() {
        this.count++;
    },
    get decrement() {
        this.count--;
    },
    set add(value) {
        this.count += value;
    },
    set subtract(value) {
        this.count -= value;
    }
};

counter.reset;
var countNode = document.createTextNode(counter.count);
var demo3 = document.getElementById('demo3');
demo3.appendChild(countNode);

counter.add = 5;
var countNode = document.createTextNode(counter.count);
var demo4 = document.getElementById('demo4');
demo4.appendChild(countNode);

counter.subtract = 1;
var countNode = document.createTextNode(counter.count);
var demo5 = document.getElementById('demo5');
demo5.appendChild(countNode);

counter.increment;
var countNode = document.createTextNode(counter.count);
var demo6 = document.getElementById('demo6');
demo6.appendChild(countNode);

counter.decrement;
var countNode = document.createTextNode(counter.count);
var demo7 = document.getElementById('demo7');
demo7.appendChild(countNode);

var anotherCounter = { count: 0 };
Object.defineProperty(anotherCounter, 'reset', {
    get: function () { this.count = 0; }
});
Object.defineProperty(anotherCounter, 'increment', {
    get: function () { this.count++; }
});
Object.defineProperty(anotherCounter, 'decrement', {
    get: function () { this.count--; }
});
Object.defineProperty(anotherCounter, 'add', {
    set: function (value) { this.count += value; }
});
Object.defineProperty(anotherCounter, 'subtract', {
    set: function (value) { this.count -= value; }
});

anotherCounter.reset;
var countNode = document.createTextNode(anotherCounter.count);
var demo8 = document.getElementById('demo8');
demo8.appendChild(countNode);

anotherCounter.add = 5;
var countNode = document.createTextNode(anotherCounter.count);
var demo9 = document.getElementById('demo9');
demo9.appendChild(countNode);

anotherCounter.subtract = 1;
var countNode = document.createTextNode(anotherCounter.count);
var demo10 = document.getElementById('demo10');
demo10.appendChild(countNode);

anotherCounter.increment;
var countNode = document.createTextNode(anotherCounter.count);
var demo11 = document.getElementById('demo11');
demo11.appendChild(countNode);

anotherCounter.decrement;
var countNode = document.createTextNode(anotherCounter.count);
var demo12 = document.getElementById('demo12');
demo12.appendChild(countNode);