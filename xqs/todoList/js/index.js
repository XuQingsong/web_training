(function () {
  var initValue = ['this is init value 1', 'this is init value 2', 'this is init value 3']

  var addNode = function() { 
    var node = $('.form-control').val()
    // var html = '<li class="list-group-item" value=' + i + '>' + node +  '</li>'
    // $('#processing .list-group').prepend(html)
    initValue.unshift(node)
    $('.form-control').val('')
  }

  var addFinish = function(e) {
    // var index = $('#processing .list-group-item')
    console.log(e.target.value)
    var index = parseInt(e.target.value, 10)
    var newNode = $('#processing .list-group-item:eq(' + index + ')')
    $('#finish .list-group').prepend(newNode)
    initValue.splice(index, 1)
  }

  renderList = function(initValue) {
    $('#processing .list-group').empty()
    for(let i=0; i<initValue.length; i++) {
      var html = '<li class="list-group-item" value=' + i + '>' + initValue[i] +  '</li>'
      $('#processing .list-group').append(html)
    }
  }

  renderList(initValue)

  // 绑定add，添加输入值到processing
  $('.btn').click( function() { addNode(); renderList(initValue) } )
  
  // 点击processing item，该item添加至finish
  $('#processing .list-group').click( function(e) { addFinish(e); renderList(initValue) } )

})()







