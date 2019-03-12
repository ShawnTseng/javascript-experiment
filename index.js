try {
    aleeeert("Test");
} catch (error) {
    console.log(error);
    document.getElementById('demo1').innerHTML = error.message;
}

try {
    throw "AA";
} catch (error) {
    document.getElementById('demo2').innerHTML = error;
}

var result = '';
try {
    result += 'try,';
    throw 1;
} catch (error) {
    result += 'catch,';
} finally {
    result += 'finally,';
}
document.getElementById('demo3').innerHTML = result;

var num = 1;
try {
    // 指定整個數值的長度，合理範圍是1~21，故意設定超出範圍
    num.toPrecision(500);
}
catch (err) {
    document.getElementById("demo4").innerHTML = err.name;
}

var x;
try {
    x = y + 1;   // y 還沒被宣告
}
catch (err) {
    document.getElementById("demo5").innerHTML = err.name;
}

try {
    eval("alert('H)");   // 少了一個單引號
}
catch (err) {
    document.getElementById("demo6").innerHTML = err.name;
}

var num = 1;
try {
    num.toUpperCase();   // 型別 number 沒有這種function
}
catch (err) {
    document.getElementById("demo7").innerHTML = err.name;
}

try {
    decodeURI("%%%");   // 解碼不正常的URI
}
catch (err) {
    document.getElementById("demo8").innerHTML = err.name;
}