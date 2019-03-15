"use strict";
a = 3.14;
b = { name: 'Shawn', age: 18 }; // object也是變數，必須宣告

test();
function test() {
    c = 18;
}

var d = 3.14;
delete d;

function aFunction(a, b) { }
delete aFunction;

var x = 010;

var x = "\010";

var constantCollection = {};
Object.defineProperty(constantCollection, "pi", { value: 3.14, writable: false });
constantCollection.pi = 3.14159;

var obj = {
    get x() {
        return 0
    }
};
obj.x = 3.14;

var eval = 0;

var arguments = 0;

with (Math) { x = sin(2) };

eval("var aaa = 'aaa'");
alert(aaa);