var date = new Date();

document.getElementById('demo1').innerHTML = date.getTime();
document.getElementById('demo2').innerHTML = date.getFullYear();
document.getElementById('demo3').innerHTML = date.getMonth();

var months = [
  '1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月',
  '12月'
];

document.getElementById('demo4').innerHTML = months[date.getMonth()];

document.getElementById('demo5').innerHTML = date.getDate();
document.getElementById('demo6').innerHTML = date.getHours();
document.getElementById('demo7').innerHTML = date.getMinutes();
document.getElementById('demo8').innerHTML = date.getSeconds();
document.getElementById('demo9').innerHTML = date.getMilliseconds();
document.getElementById('demo10').innerHTML = date.getDay();

var days =
    ['禮拜日', '禮拜一', '禮拜二', '禮拜三', '禮拜四', '禮拜五', '禮拜六'];

document.getElementById('demo11').innerHTML = days[date.getDay()];
