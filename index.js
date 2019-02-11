var txt = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var sln = txt.length;
document.getElementById('demo1').innerHTML = sln;

var str =
    'If you want to Dance, just find a locate and my friend called John do it!';
var str2 = 'Break, Guitar, Japanese';

var pos = str.indexOf('locate');
document.getElementById('demo2').innerHTML = pos;

var pos = str.lastIndexOf('locate');
document.getElementById('demo3').innerHTML = pos;

var pos = str.lastIndexOf('John');
document.getElementById('demo4').innerHTML = pos;

var pos = str.indexOf('locate', 15);
document.getElementById('demo5').innerHTML = pos;

var pos = str.lastIndexOf('locate', 15);
document.getElementById('demo6').innerHTML = pos;

var pos = str.search('locate');
document.getElementById('demo7').innerHTML = pos;

var res = str2.slice(7, 13);
document.getElementById('demo8').innerHTML = res;

var res = str2.slice(-9, -1);
document.getElementById('demo9').innerHTML = res;

var res = str2.slice(7);
document.getElementById('demo10').innerHTML = res;

var res = str2.slice(-9);
document.getElementById('demo11').innerHTML = res;

var res = str2.substring(7, 13);
document.getElementById('demo12').innerHTML = res;

var res = str2.substr(7, 6);
document.getElementById('demo13').innerHTML = res;

var res = str2.substr(7);
document.getElementById('demo14').innerHTML = res;

var res = str2.substr(-9);
document.getElementById('demo15').innerHTML = res;

var res = str2.replace('Break', 'Bboy');
document.getElementById('demo16').innerHTML = res;

// 不分大小寫
var res = str2.replace(/BREAK/i, 'Bboy');
document.getElementById('demo17').innerHTML = res;

// 整段字串符合條件的文字全部取代
var res = str2.replace(/Break/g, 'Bboy');
document.getElementById('demo18').innerHTML = res;

var text1 = 'Hello';
var text2 = 'World';
var res = text1.concat(' ', text2);
document.getElementById('demo19').innerHTML = res;

// IE8之前的trim功能的polyfill
if (!String.prototype.trim) {
  String.prototype.trim = function() {
    return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
  };
}
var str = '       Hello World!        ';
document.getElementById('demo20').innerHTML = res;

var res = "HELLO WORLD".charAt(0);
document.getElementById('demo21').innerHTML = res;

var res = "HELLO WORLD".charCodeAt(0);
document.getElementById('demo22').innerHTML = res;

var str = "HELLO WORLD";
str[0] = "A"; // Gives no error, but does not work
document.getElementById('demo23').innerHTML = str[0]; // H

var txt = "a,b,c,d,e";   // String
var arr = txt.split(",");          // Split on commas
document.getElementById("demo24").innerHTML = arr[0];