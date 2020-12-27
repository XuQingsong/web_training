window.onload = function () {
    var container = document.getElementById('container');/* 获取容器 */
    var list = document.getElementById('list');/* 获取列表 */
    var buttons = document.getElementById('buttons').getElementsByTagName('span');/* 获取按键 */
    var prev = document.getElementById('prev');/* 左箭头 */
    var next = document.getElementById('next');/* 右箭头 */
    var index = 1;
    var len = 5;
    var animated = false;      
    var interval = 3000;  /* 定时器 */
    var timer;


    function animate (offset) {
        if (offset == 0) {
            return;
        }
        animated = true;
        var time = 300;
        var inteval = 10;
        var speed = offset/(time/inteval);
        var left = parseInt(list.style.left) + offset;

        var go = function (){
            if ( (speed > 0 && parseInt(list.style.left) < left) || (speed < 0 && parseInt(list.style.left) > left)) {
                list.style.left = parseInt(list.style.left) + speed + 'px';
                setTimeout(go, inteval);
            }
            else {
                list.style.left = left + 'px';
                if(left>-200){
                    list.style.left = -600 * len + 'px';
                }
                if(left<(-600 * len)) {
                    list.style.left = '-600px';
                }
                animated = false;
            }
        }
        go();
    }

    function showButton() {
        for (var i = 0; i < buttons.length ; i++) {
            if( buttons[i].className == 'on'){
                buttons[i].className = '';
                break;
            }
        }
        buttons[index - 1].className = 'on';
    }
/* 自动播放 */
    function play() {
        timer = setTimeout(function () {
            next.onclick();              /* 设置定时器 */
            play();
        }, interval);
    }
    function stop() {
        clearTimeout(timer);          /* 清除定时器  停止自动播放  */
    }

    next.onclick = function () {
        if (animated) {
            return;
        }
        if (index == 5) {
            index = 1;
        }
        else {
            index += 1;
        }
        animate(-600);
        showButton();
    }
    prev.onclick = function () {
        if (animated) {
            return;
        }
        if (index == 1) {
            index = 5;
        }
        else {
            index -= 1;
        }
        animate(600);
        showButton();
    }

    for (var i = 0; i < buttons.length; i++) {
        buttons[i].onclick = function () {
            if (animated) {
                return;
            }
            if(this.className == 'on') {
                return;
            }
            var myIndex = parseInt(this.getAttribute('index'));
            var offset = -600 * (myIndex - index);

            animate(offset);
            index = myIndex;
            showButton();
        }
    }

    container.onmouseover = stop;        /* 停止 */
    container.onmouseout = play;         /* 播放 */

    play();

}