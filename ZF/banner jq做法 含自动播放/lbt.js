$(document).ready(function(){
    var i = 0;  /* 定义参数 */          /* 函数 */
    var timer; /* 定时器 */   /* 函数 */

    $('.item').eq(0).show().siblings('.item').hide(); /* 默认让第一张图片显示 其他隐藏 */  /* eq（0） 默认情况等于0 eq是遍历方法 选中所有item */
                           /*  siblings jq中的获取兄弟节点 */

    /* 创建函数 show  显示动画效果    */                    
    function show() {
        /* eq遍历 i 淡入300       让其他兄弟元素 蛋出300  实现了淡入淡出的效果 */
        $('.item').eq(i).fadeIn(300).siblings('.item').fadeOut(300);
        /* 让 每个tab 依次有active 属性  eq遍历 给tab里面的元素加active       让兄弟删除掉 active属性  */
        $('.tab').eq(i).addClass('active').siblings('.tab').removeClass('active');
    }

    /* 让动画动起来 */
    function showTime(){
        timer = setInterval(function (){          /*  给timer设置定时器 */
            show();  /* 调用show */
            i++;   /* 1 2 3 4 5 */

            if(i==5) {         /* if判断 当i=5时 i回去等于0 */
                i = 0;
            }
        },3000);      /* 3000毫秒换一次   */
    }




    showTime(); /* 调用 showtime函数 */


        /* tab圆点点击切换实现 */
    $('.tab').hover(function(){  /* hover 悬浮属性 */
        i = $(this).index(); /* 让i作为索引参数 */
        show();           /* 当鼠标移动到某个tab  某个tab会附值  返回给 i */
        clearInterval(timer); /* 清除定时器 */
    }, function (){  /* 当鼠标离开时调用showtime(调用定时器) */
        showTime();
    });

    /*  左右的按钮功能实现   给prev和next 加事件 */
    $('.prev').click(function(){  /*  当单击元素时，发生 click 事件。click() 方法触发 click 事件，或规定当发生 click 事件时运行的函数。 */
        clearInterval(timer);/* 清除定时器 */
        if (i ==0){ /* if判断 如i=0时 让i=5  */
            i =5
        }
        i --;  /* 其他情况是 i   依次调用 show和showtime -- */
        show();
        showTime();

    });
     /* 实现方法同上 */
    $('.next').click(function () {
        clearInterval(timer);
        if (i == 4) {
            i = -1;     /* 如果i=4时   i=-1      当切换到第4张图时 需要返回第一张图 i的值应该为 0   但是有i++   所以此时 i=-1 */
        }
        i++;
        show();
        showTime();
    });
});            