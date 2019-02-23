document.getElementById('demo1').innerHTML = new Date('2019-02-23');

document.getElementById('demo2').innerHTML = new Date('2019-02');

document.getElementById('demo3').innerHTML = new Date('2019');

document.getElementById('demo4').innerHTML = new Date('2019-02-23T06:30:00Z');

document.getElementById('demo5').innerHTML =
    new Date('2019-02-23T14:30:00+08:00');

document.getElementById('demo6').innerHTML = new Date('2019-02-23T14:30:00');

document.getElementById('demo7').innerHTML = new Date('02/23/2019');
document.getElementById('demo8').innerHTML = new Date('2/23/2019');
document.getElementById('demo9').innerHTML = new Date('2019/02/23');
document.getElementById('demo10').innerHTML = new Date('23-02-2019');

document.getElementById('demo11').innerHTML = new Date('Feb 23 2019');
document.getElementById('demo12').innerHTML = new Date('23 Feb 2019');
document.getElementById('demo13').innerHTML = new Date('February 23 2019');
document.getElementById('demo14').innerHTML = new Date('23 February 2019');
document.getElementById('demo15').innerHTML = new Date('FEBRUARY, 23, 2019');

var msec = Date.parse('February 23, 2019');
var date = new Date(msec);
document.getElementById('demo16').innerHTML = msec;

document.getElementById('demo17').innerHTML = date;