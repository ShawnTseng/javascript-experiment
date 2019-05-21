function loadData() {
    let myHttp;

    if (window.XMLHttpRequest) {
        // 現代瀏覽器
        myHttp = new XMLHttpRequest();
    } else {
        // 舊瀏覽器(IE5、IE6)
        myHttp = new ActiveXObject("Microsoft.XMLHTTP");
    }

    myHttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            document.getElementById('demo1').textContent = this.responseText;
        }
    }
    myHttp.open('GET', 'my.txt', true);
    myHttp.send();

    console.log(myHttp.getAllResponseHeaders());
}