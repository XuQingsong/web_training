(function() {
    // var body = document.querySelector('body')
    // document.addEventListener('click',function() {
    //     var right = document.createElement('div')
    //     var alan = document.createElement("div")
    //     right.setAttribute('class', 'right')
    //     alan.className = 'alan'
    //     alan.innerHTML = "创建的div元素节点"
    //     right.appendChild(alan)
    //     body.appendChild(right)
    // },false)
//     var $body = $('body')
//     $body.on('click', function() {
//     var div = $("<div class='right'><div class='arr'>创建div节点哦元素们</div></div>")
//     $body.append(div)
// })
$("#bt1").on('click', function() {
    //删除了2个p元素，但是本着没有删除 
    $("#test1").empty()
})

$("#bt2").on('click', function() {
    //删除整个节点
    $("#test2").remove()
})
$('#bt3').click(function() {
    //?
})
$('#bt4').click(function() {
    $('.div').children(':last').css('border', '3px solid blue')
})
$(".add1").on('click', function() {
    //给所有p元素，增加父容器div
    $('#main p').wrap('<div></div>')
})

$(".add2").on('click', function() {
    $('a').wrap(function() {
        return '<div class="' + $(this).text() + '" />';
    })
})
})()