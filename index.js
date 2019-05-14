function onAlert() {
    window.alert('alert');
}

function onConfirm() {
    const demo1 = document.getElementById('demo1');
    const result = window.confirm('Yes or No');
    if (result) {
        demo1.textContent = 'Yes';
    } else {
        demo1.textContent = 'No';
    }
}

function onPrompt() {
    const demo2 = document.getElementById('demo2');
    const result = window.prompt('enter somthing:', 'Test');
    if (result === null || result === '') {
        demo2.textContent = 'the prompt has been cancelled';
    } else {
        demo2.textContent = 'Hello, you enter the message:' + result;
    }
}

function onAlert2() {
    window.alert('Hi\nShawn');
}