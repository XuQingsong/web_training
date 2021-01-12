(function() {
  var processingList = ['this is prcessing 1', 'this is prcessing 2', 'this is prcessing 3'];
  var finishList = ['this is finish 1', 'this is finish 2', 'this is finish 3'];

  function renderList() {
    $('#processing .list-group').empty()
    $('#finish .list-group').empty()
    for(let i=0; i<processingList.length; i++) {
      var html = '<li class="list-group-item" value=' + i + '>' + processingList[i] +  '</li>' //'<li class="list-group-item" value=0>this is init value 1</li>
      $('#processing .list-group').append(html)
    }
    for(let i=0; i<finishList.length; i++) {
      var html = '<li class="list-group-item" value=' + i + '>' + finishList[i] +  '</li>' //'<li class="list-group-item" value=0>this is init value 1</li>
      $('#processing .list-group').append(html)
    }
  }

  // 绑定add，添加输入值到processing
  $('.btn').click( function() { 
    //  把从input框读取到的值，插入到processingList数组中，然后renderList
   } )

  // 点击processing item，该item添加至finish
  $('#processing .list-group').click( function(e) { 
    //  获取点击的processingList的item，将此item从processingList中删除，再将此item添加到finishList中，然后renderList
   } ) 

  $('#finish .list-group').click( function(e) { 
  //  获取点击的finishList的item，将此item从finishList中删除，再将此item添加到processingList中，然后renderList
  } ) 



  // $.ajax({
  //   type: "get",
  //   url: "http://crm.xuziqiao.com/api/finance",
  //   data: {},
  //   // dataType: "dataType",
  //   success: function (response) {
  //     console.log(response)
  //   }
  // });
  // var xhr = new XMLHttpRequest()
  // xhr.onreadystatechange = function () { 
  //   if(xhr.readyState === 4) {
  //     console.log(JSON.parse(xhr.response))
  //   }
  // }
  // xhr.open('get', 'http://crm.xuziqiao.com/api/finance', false)
  // xhr.send({})
  // console.log(xhr.status)

  var p = new Promise((resolve, reject) => {
    var xhr = new XMLHttpRequest()
    xhr.open('get', 'http://crm.xuziqiao.com/api/finance', true)
    xhr.send({})
    xhr.onreadystatechange = function () { 
    if(xhr.readyState === 4) {
      if(xhr.status === 200) {
        resolve(JSON.parse(xhr.response))
      } else {
        reject(xhr.response)
      }
    }
  }
  })
  p.then(
    res => {console.log(res)}, 
    err => {console.log(err)}
  )
  
})()