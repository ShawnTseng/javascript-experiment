document.getElementById('demo1').textContent = location.href;
document.getElementById('demo2').textContent = location.hostname;
document.getElementById('demo3').textContent = location.pathname;
document.getElementById('demo4').textContent = location.protocol;
document.getElementById('demo5').textContent = location.port;

function forwardToMyPage() {
    location.assign("https://shawntseng.blogspot.com/");
}