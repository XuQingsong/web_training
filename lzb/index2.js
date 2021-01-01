(function () {
    var nextAnother = ['this is another 1', 'this is another 2', 'this is another 3']
    var nextProcessing = function(e) {
        console.log(e.target.another)
        var index = parseInt(e.target.another, 10)
        var newAnother = $('#finish .list-group-item:eq(' + index + ')')
        $('#processing .list-group').prepend(newAnother)
        nextAnother.splice(index, 1)
        console.log(nextAnother)
        renderGroup(nextAnother)
    }
    var renderGroup = function(nextAnother) {
        $('#finish .list-group').empty()
        for(let i=0; i<nextAnother.length; i++){
            var html = '<li class="list-group-item" another=' + i + '>' + nextAnother[i] +  '</li>'
            $('#finish .list-group').append(html)
        }
    }
    renderGroup(nextAnother)
    $('#finish .list-group').click( function(e) { nextProcessing(e) } )
})()