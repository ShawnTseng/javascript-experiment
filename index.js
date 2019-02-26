var date = new Date();

document.getElementById('demo1').innerHTML = date;

date.setFullYear(2020);

document.getElementById('demo2').innerHTML = date;

date.setFullYear(2020, 4, 20);

document.getElementById('demo3').innerHTML = date;

date.setMonth(0);

document.getElementById('demo4').innerHTML = date;

date.setDate(9);

document.getElementById('demo5').innerHTML = date;

date.setDate(date.getDate() + 100);

document.getElementById('demo6').innerHTML = date;

date.setHours(20);

document.getElementById('demo7').innerHTML = date;

date.setMinutes(8);

document.getElementById('demo8').innerHTML = date;

date.setSeconds(0);

document.getElementById('demo9').innerHTML = date;

var date1 = new Date();
var date2 = new Date(2038, 4, 20);
var result = '';

// 自定義格式化日期
Date.prototype.getFormattedDate =
    function(date) {
  var year = date.getFullYear();

  var month = (1 + date.getMonth()).toString();
  month = month.length > 1 ? month : '0' + month;

  var day = date.getDate().toString();
  day = day.length > 1 ? day : '0' + day;

  return year + '-' + month + '-' + day;
}

// ES2017，IE不能用，其他可以
function
getFormattedDate(date) {
  let year = date.getFullYear();
  let month = (1 + date.getMonth()).toString().padStart(2, '0');
  let day = date.getDate().toString().padStart(2, '0');

  return month + '/' + day + '/' + year;
}

if (date1 > date2) {
  result =
      date1.getFormattedDate(date1) + ' > ' + date2.getFormattedDate(date2);
}
else {
  result =
      date1.getFormattedDate(date1) + ' < ' + date2.getFormattedDate(date2);
}

document.getElementById('demo10').innerHTML = result;