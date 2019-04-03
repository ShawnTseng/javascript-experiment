var user = {
    name: 'Shawn',
    getName: function () {
        return this.name;
    }
}

document.getElementById('demo1').innerHTML = user.getName();
document.getElementById('demo2').innerHTML = user.getName;

user.attachPrefix = function (prefix) {
    return prefix + ' ' + this.name;
}

document.getElementById('demo3').innerHTML = user.attachPrefix('Test');
