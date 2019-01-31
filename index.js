var txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var sln = txt.length;
document.getElementById("demo1").innerHTML = sln;

var str = "Please locate where 'locate' occurs!";
var pos = str.indexOf("locate");
document.getElementById("demo2").innerHTML = pos;

var str = "Please locate where 'locate' occurs!";
var pos = str.lastIndexOf("locate");
document.getElementById("demo3").innerHTML = pos;

var str = "Please locate where 'locate' occurs!";
var pos = str.lastIndexOf("John");
document.getElementById("demo4").innerHTML = pos;

var str = "Please locate where 'locate' occurs!";
var pos = str.indexOf("locate", 15);
document.getElementById("demo5").innerHTML = pos;

var str = "Please locate where 'locate' occurs!";
var pos = str.lastIndexOf("locate", 15);
document.getElementById("demo6").innerHTML = pos;

var str = "Please locate where 'locate' occurs!";
var pos = str.search("locate");
document.getElementById("demo7").innerHTML = pos;