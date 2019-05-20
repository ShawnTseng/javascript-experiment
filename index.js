function loadData() {
    const myHttp = new XMLHttpRequest();
    myHttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            document.getElementById('demo1').textContent = this.responseText;
        }
    }
    myHttp.open('GET', 'https://www.w3schools.com/js/ajax_info.txt', true);
    myHttp.send();
}