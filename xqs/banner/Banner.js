(function(window) {
  var Banner = function(options) {
    this.element = options.element
    this.imgArr = options.imgArr
    // this.isAutoPlay = options.isAutoPlay
    // this.isAutoPlay === true ? setInterval(this.nextStep(), 1000) : null
    this.init()

  }
  Banner.prototype.init = function() {
    // var dot = document.createElement('div')
    // dot.setAttribute()
    var imgArr = this.imgArr
    var banner = document.getElementById(this.element)
    // var slide_num = banner.children.length
    var dot = document.createElement('div')
    dot.className = 'dot'
    console.log(imgArr.length, dot)
    for(let i = 0; i < imgArr.length; i++) {
      // 创建img
      var imgWrap = document.createElement('div')
      imgWrap.className = i === 1 ? 'slide active' : 'slide'
      var img = document.createElement('img')
      img.src = imgArr[i]
      imgWrap.appendChild(img)

      // 创建dot
      var dot_a = document.createElement('a')
      dot_a.className = 'slide_switch__item'
      var dot_i = document.createElement('i')
      dot_i.className = 'slide_switch__bg'
      dot_a.appendChild(dot_i)
      dot_a.onclick = this.scrollTo(i)
      dot.appendChild(dot_a)
      // console.log(dot_i, dot_a, dot.children[i])
      banner.appendChild(imgWrap)
    }
    console.log(dot)
    banner.appendChild(dot)
    var prev = document.createElement('a')
    prev.className += 'focus-navigation'
    prev.className += ' focus-prev'
    prev.innerHTML = '&lt;'
    prev.onclick = this.preStep()
    var next = document.createElement('a')
    next.className += 'focus-navigation'
    next.className += ' focus-next'
    next.innerHTML = '&gt;'
    next.onclick = this.nextStep()
    banner.appendChild(prev)
    banner.appendChild(next)
    
  }
  Banner.prototype.nextStep = function() {};
  Banner.prototype.preStep = function() {};
  Banner.prototype.scrollTo = function(i) {};
  window.Banner = Banner;
})(window) 
var animated = false
var banner = document.getElementById('banner')
var prev = document.getElementsByClassName('focus-prev')
var next = document.getElementsByClassName('focus-next')
var ulLis = img.children
var liWidth = img.children[0].offsetWidth
console.log('liWidth', liWidth)
img.appendChild(img.children[0].cloneNode(true))
var timer
var key = 0
var dot = document.getElementsByClassName('dot')
function animate(obj, target) {
  console.log('target', target)
  console.log('offsetLeft', obj.offsetLeft)
  clearInterval(obj.t)
  var speed = obj.offsetLeft < target ? 10  :  -10
  console.log('speed', speed)
  obj.t = setInterval(function(){
    var result = target - obj.offsetLeft
    console.log('result', result, Math.abs(result))
    obj.style.left = obj.offsetLeft + speed + "px"
    console.log('obj.style.left', obj.style.left)
    if (Math.abs(result)  <= Math.abs(speed)) {
      clearInterval(obj.t)
      obj.style.left = target + "px"
      console.log('obj.style.left', obj.style.left)
    }
  },10)
}

function autoplay(){
  shownButton()
  key++
  if(key > ulLis.length-1){
      img.style.left = 0
      key = 1
  }
  animate(img, -key*liWidth)
  // console.log('key', key)
  if (key !== 4) {
      dot_i[key].className = 'on'
  } else {
      dot_i[0].className = 'on'
  }
}
timer = setInterval(autoplay, 2000)
function shownButton(){
  for (var i = 0; i < dot_a.length ; i++) {
      dot_a[i].className = ''
  }