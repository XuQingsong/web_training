(function () {
  var initValue = ['吃饭', '睡觉', '工作']

  var addNode = function () {
    var node = $('.form-control').val() //提取元素的值
    initValue.unshift(node)  //initvalue添加数组到第一行
    renderList(initValue) //渲染一遍initvalue数组
    console.log(initValue) //输出initvalue
    $('.form-control').val('') //选择val中的值为空的
  }

  var addFinish = function (e) {
    console.log(e.target.value);  //e.targrt .value 函数event中选中的目标的值
    var index = parseInt(e.target.value, 10)  //parseint 被返回的值 10是10进制
    if (index >= 0) {/* if判断 */
      var newNode = $('#processing .list-group-item:eq(' + index + ')') //用来筛选他们前面的匹配表达式的集合元素，根据之前匹配的元素在进一步筛选
      var zf = $('#processing .list-group-item:eq(' + index + ')').text(); /* text() 方法设置或返回被选元素的文本内容。 */
      $('#finish .list-group').prepend(newNode);//将newnode中的元素插入到$()的选择器中prepend()向每个匹配的元素内部前置内容 将要被插入的内容作为方法的参数
      initValue.splice(index, 1);//initialvalue数组 将要依次删除已经插入到另一个数组的原本的数组
      finishValue.splice(0, 0, zf);/* value数组 */
      renderGroup(finishValue) //再次渲染
      /* console.log(initValue); */
      renderList(initValue); /* 同理 */
    }
  }

  var renderList = function (initValue) {
    $('#processing .list-group').empty() //选择（）的内容清除掉
    for (let i = 0; i < initValue.length; i++) {
      var html = '<li class="list-group-item" value=' + i + '>' + initValue[i] + '</li>'
      $('#processing .list-group').append(html)  //将 html元素添加到$()的选择器中append()向每个匹配的元素内部追加内容 插入到第一个子元素
    }
  }

  renderList(initValue)  //再次渲染initvalue

  // 绑定add，添加输入值到processing
  $('.btn').click(function () { addNode() })

  // 点击processing item，该item添加至finish
  $('#processing .list-group').click(function (e) { addFinish(e) })


/* 正在进行开始 */


  var finishValue = ['健身', '洗碗', '电动车充电']  /* 创造数组 */



  var addProcessing = function (e) {
    /* console.log(e.target.value) */
    var index = parseInt(e.target.value, 10) //parseint 被返回的值 10是10进制
    if (index >= 0) { /* 判断语句 */
      var Node = $('#finish .list-group-item:eq(' + index + ')') /* 同理16行 */
      var zfa = $('#finish .list-group-item:eq(' + index + ')').text();/* 同理16行 */
      $('#processing .list-group').prepend(Node)//将node中的元素插入到$()的选择器中prepend()向每个匹配的元素内部前置内容 将要被插入的内容作为方法的参数
      finishValue.splice(index, 1) /* 删除finishvalue数组 */
      initValue.splice(0, 0, zfa);/* value数组 */
      renderGroup(initValue)//再次渲染
      /* console.log(finishValue) */
      renderGroup(finishValue)/* 同理 */
    }
  }
  
  var renderGroup = function (finishValue) {
    $('#finish .list-group').empty()//选择（）的内容清除掉
    for (let i = 0; i < finishValue.length; i++) {
      var html = '<li class="list-group-item" value=' + i + '>' + finishValue[i] + '</li>'
      $('#finish .list-group').append(html)//将 html元素添加到$()的选择器中append()向每个匹配的元素内部追加内容 插入到第一个子元素
    }
  }

  renderGroup(finishValue)//渲染

                     /* 回调函数 */
  $('#finish .list-group').click(function (e) { addProcessing(e) })//点击 finnish .list-group, 将该list-group-item添加processing中



})()










