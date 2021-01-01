(function() {
  var initValue = ['this is init value 1', 'this is init value 2', 'this is init value 3']

  var addNode = function() { 
    var node = $('.form-control').val()
    initValue.unshift(node)
    renderList(initValue)
    console.log(initValue)
    $('.form-control').val('')
  }

  var addFinish = function(e) {
    // var index = $('#processing .list-group-item')
    console.log(e.target.value)
    var index = parseInt(e.target.value, 10)
    var newNode = $('#processing .list-group-item:eq(' + index + ')')
    var lzb = $('#processing .list-group-item:eq(' + index + ')').text();
    $('#finish .list-group').prepend(newNode)
    initValue.splice(index, 1)
    finishValue.splice(0,0,lzb)
    renderList(initValue)
    renderClone(finishValue)
  }

  var renderList = function(initValue) {
    $('#processing .list-group').empty()
    for(let i=0; i<initValue.length; i++) {
      var html = '<li class="list-group-item" value=' + i + '>' + initValue[i] +  '</li>' //'<li class="list-group-item" value=0>this is init value 1</li>
      $('#processing .list-group').append(html)
    }
  }

  renderList(initValue)

  // 绑定add，添加输入值到processing
  $('.btn').click( function() { addNode() } )
  
  // 点击processing item，该item添加至finish
  $('#processing .list-group').click( function(e) { addFinish(e) } )


  var finishValue = ['this is finish value 1', 'this is finish value 2', 'this is finish value 3']  /* 创造数组 */
  var Processing = function(e) {
      console.log(e.target.value)
      var index = parseInt(e.target.value, 10)
      var yesNode = $('#finish .list-group-item:eq(' + index + ')')
      var hreat = $('#finish .list-group-item:eq(' + index + ')').text();
      $('#processing .list-group').prepend(yesNode)
      finishValue.splice(index, 1) /* 删除finishvalue数组 */
      initValue.splice(0,0,hreat)
      renderClone(initValue)
      renderClone(finishValue)
  }

  var renderClone = function(finishValue) {
      $('#finish .list-group').empty()
      for(let i=0; i<finishValue.length; i++){
          var html = '<li class="list-group-item" value=' + i + '>' + finishValue[i] +  '</li>'
          $('#finish .list-group').append(html)
          
      }
  }
  
  renderClone(finishValue)

  $('#finish .list-group').click( function(e) { Processing(e) } )
})()










