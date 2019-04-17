var user = {
    fullName: function (phone, address) {
        let result = this.firstname + ' ' + this.lastName;
        if (phone) {
            result += ',' + phone;
        }
        if (address) {
            result += ',' + address;
        }
        return result;
    }
};

var me = {
    firstname: 'Tseng',
    lastName: 'Shawn'
}

var myCoworker = {
    firstname: 'Cho',
    lastName: 'Ray'
}

document.getElementById('demo1').textContent = user.fullName.call(me);
document.getElementById('demo2').textContent = user.fullName.call(myCoworker);
document.getElementById('demo3').textContent = user.fullName.call(myCoworker, '0900123456', 'Taiwan');