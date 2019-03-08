document.getElementById('demo1').innerHTML = typeof NaN;
document.getElementById('demo2').innerHTML = typeof new Array();
document.getElementById('demo3').innerHTML = typeof new Date();
document.getElementById('demo4').innerHTML = typeof null;
document.getElementById('demo5').innerHTML = typeof undefined;

document.getElementById('demo6').innerHTML = "Shawn".constructor;
document.getElementById('demo7').innerHTML = (27).constructor;
document.getElementById('demo8').innerHTML = true.constructor;
document.getElementById('demo9').innerHTML = new Array().constructor;
document.getElementById('demo10').innerHTML = { name: 'Shawn' }.constructor;
document.getElementById('demo11').innerHTML = new Date().constructor;
document.getElementById('demo12').innerHTML = function () { }.constructor;

function isArray1(v) {
    return v.constructor.toString().indexOf('Array') > -1;
};

function isArray2(v) {
    return v.constructor === Array;
}

document.getElementById('demo13').innerHTML = isArray1(new Array());
document.getElementById('demo14').innerHTML = isArray2(new Array());

function isDate1(v) {
    return v.constructor.toString().indexOf('Date') > -1;
};

function isDate2(v) {
    return v.constructor === Date;
}

document.getElementById('demo15').innerHTML = isDate1(new Date());
document.getElementById('demo16').innerHTML = isDate2(new Date());

document.getElementById('demo17').innerHTML = String(new Date());
document.getElementById('demo18').innerHTML = Number("");
document.getElementById('demo19').innerHTML = Number(true);
document.getElementById('demo20').innerHTML = Number(false);
document.getElementById('demo21').innerHTML = + "13";
document.getElementById('demo22').innerHTML = + "Shawn";
