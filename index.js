// template
// var timerId = setInterval(frame, interval);
// function frame() {
//     if (condition) {
//         // 停止動畫處理
//         clearInterval(timerId);
//     } else {
//         // 動畫
//     }
// }


function moveSquare() {
    const square = document.getElementById('square');
    var position = 0;
    var timerId = setInterval(frame, 10);
    function frame() {
        if (position === 350) {
            // 停止動畫處理
            clearInterval(timerId);
        } else {
            position++;
            square.style.top = position + 'px';
            square.style.left = position + 'px';
        }
    }
}