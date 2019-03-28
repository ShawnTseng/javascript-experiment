var memberList = {
    "member": [
        {
            "name": "Shawn",
            "age": 18
        },
        {
            "name": "Koji",
            "age": 22
        }
    ]
};

var TextOfMemberList =
    '{' +
    '"member": [' +
    '{' +
    '"name": "Shawn",' +
    '"age": 18' +
    '},' +
    '{' +
    '"name": "Koji",' +
    '"age": 22' +
    '}' +
    ']' +
    '}';

// 可將JSON轉換成字串
document.getElementById('demo1').innerHTML = JSON.parse(TextOfMemberList);