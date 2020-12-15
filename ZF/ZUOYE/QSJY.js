var dotEvent = document.getElementById('banner-dot')
dotEvent.onclick = function(e) {
  var num = parseInt(e.target.getAttribute('value'),10)
  var banner = document.getElementById('img-banner')
  var len = banner.children.length
  console.log(num)
  for(let i =0; i<len; i++) {
    if(num === i) {
      banner.children[i].className="active"
      console.log('aaaa')
    } else {
      banner.children[i].className=""
    }
  }
}