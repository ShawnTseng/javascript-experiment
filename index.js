var user = { name: 'Shawn', age: 18 };
for (const key in user) {
    if (user.hasOwnProperty(key)) {
        const element = user[key];
        let context = '';
        context += key + ': ';
        context += element;
        context += '<br>';
        document.getElementById('demo1').innerHTML += context;
    }
}

user.dept = 'mkpl';
for (const key in user) {
    if (user.hasOwnProperty(key)) {
        const element = user[key];
        let context = '';
        context += key + ': ';
        context += element;
        context += '<br>';
        document.getElementById('demo2').innerHTML += context;
    }
}