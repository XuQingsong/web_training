var rt = 2000     // t值为每张图片移出视图窗的时间(毫秒)
var list = document.getElementById("list") // 获取图片集DOM
var wrap = document.getElementById("wrap") // 获取图片集容器DOM

var ulLis = list.children // 获取所有图片
var liWidth = list.children[0].offsetWidth // 获取第1张图片的布局宽度width(border+padding+width)
list.style.left = - liWidth + 'px'
list.appendChild(list.children[0].cloneNode(true)) // 深克隆第一张图片到图片集DOM最后面
list.insertBefore(list.children[list.children.length-2].cloneNode(true), list.childNodes[0]) // 深克隆最后一张图片到图片集DOM最前面

var buttons = document.getElementById("buttons") // 获取序号容器DOM
var buttonsLis = buttons.children // 创建序号容器的子elements
var prev=document.getElementById("prev")
var next=document.getElementById("next")
var timer2
var circle = 0
var animated = false
var index = 1
function carouselInit() {
    prev.onclick = function(){
        if (!animated) {
            if (index == 1) {
                index = ulLis.length - 2
                circle = ulLis.length - 2
            } else {
                index -= 1
                circle -= 1
            }
            autoplay(liWidth)
        }   
    }
    next.onclick = function(){
        if (!animated) {
            if (index == ulLis.length - 2) {
                index = 1
                circle = 1
            } else {
                index += 1
                circle += 1
            }
            autoplay(-liWidth)
        }
    }
    // 开始播放
    function play() {
        // timer2 = setInterval(autoplay, t)
        // 每t毫秒执行1次函数autoplay
        timer2 = setInterval(function(){
            next.onclick()
        }, t)
    }
    play()
    // 停止播放
    function stop() {
        clearInterval(timer2)
    }
    wrap.onmouseover = stop
    wrap.onmouseout = play
}
carouselInit()
 // 主要函数
function autoplay(offset) {
    showNumber()
    var speed = offset/20
    animated = true
    var newLeft = parseInt(list.style.left) + offset
    function animate() {
        if ((speed > 0 && parseInt(list.offsetLeft) < newLeft) || (speed < 0 && parseInt(list.offsetLeft) > newLeft)) {
            list.style.left = list.offsetLeft + speed + 'px'
            setTimeout(animate, 10)
        } else {
            animated = false
            if (newLeft > -liWidth) {
            list.style.left = -liWidth*(ulLis.length-2) + "px"
            }
            if (newLeft < -liWidth*(ulLis.length-2)) {
            list.style.left = -liWidth + "px"
            }
        }
    }
    animate()
}
// 动态创建与图片张数对应个数序号的函数
function dynamicOrder() {
    for (let i = 0; i < ulLis.length - 2; i++) { // 根据所有图片总张数来创建对应数量的数字span并放入到序号容器buttons里
        var span = document.createElement("span")
        span.innerHTML = i + 1
        span.setAttribute('index', i + 1)
        buttons.appendChild(span)
    }
    buttons.children[0].className = "on" // 序号容器buttons里的第1个数字span[0]默认加上class激活状态on
}
dynamicOrder()
// 每个数字序号的点击函数
function spanClick() {
    for (let i = 0; i < buttonsLis.length; i++) {
        buttonsLis[i].onclick = function () {
            if (this.className == "on") {
                return
            }
            var clickIndex = parseInt(this.getAttribute("index"))
            var offset = -liWidth * (clickIndex - index)
            if (!animated) {
                autoplay(offset)
            }
            index = clickIndex
            showNumber()
        }
    }
}
spanClick()
// 与图片对应的数字序号标红的函数
function showNumber() {
    for (var i = 0; i < buttonsLis.length ; i++) {
        if( buttonsLis[i].className == 'on'){
            buttonsLis[i].className = ''
            break
        }
    }
    buttonsLis[index - 1].className = "on"
}
