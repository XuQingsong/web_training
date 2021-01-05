(function() {
  var initValue = ['this is init value 1', 'this is init value 2', 'this is init value 3']
  var finishValue = ['this is finish value 1', 'this is finish value 2', 'this is finish value 3'] 
  var varNode = function() {
    var node = $('.form-control').val()
    initValue.unshift(node)
    renderList(initValue)
    $('.form-control').val('')
  }

  var addFinish = function(e) {
    var index = parseInt(e.target.value, 10)
    var newNode = $('#processing .list-group-item:eq(' + index + ')')
    var lzb = $('#processing .list-group-item:eq(' + index + ')').text();
    $('#finish .list-group').prepend(newNode)
    initValue.splice(index, 1)
    finishValue.splice(0,0,lzb)
    renderList(initValue)
  }
  var addProcessing = function(e) {
    var index = parseInt(e.target.value, 10)
    var yesNode = $('#finish .list-group-item:eq(' + index + ')')
    var hhb = $('#finish .list-group-item:eq(' + index + ')').text();
    $('#processing .list-group').prepend(yesNode)
    finishValue.splice(index, 1)
    initValue.splice(0,0,hhb)
    renderList(initValue)
}
  var renderList = function(initValue) {
    $('#processing .list-group').empty()
    for(let i=0; i<initValue.length; i++) {
      var html = '<li class="list-group-item" value=' + i + '>' + initValue[i] +  '</li>'
      $('#processing .list-group').append(html)
    }
    $('#finish .list-group').empty()
    for(let i=0; i<finishValue.length; i++){
        var html = '<li class="list-group-item" value=' + i + '>' + finishValue[i] +  '</li>'
        $('#finish .list-group').append(html)
    }
  }
  renderList(initValue)

  $('.btn').click( function() { varNode() } )

  $('#processing .list-group').click( function(e) { addFinish(e) } )


  $('#finish .list-group').click( function(e) { addProcessing(e) } )
})()










