$(function() {
    load();
    // var todolist = [{title:'todo',done:'false'}]

    // 一.点击enter输入待办事项
    $("#title").on("keydown", function(event) {
        if (event.keyCode === 13) {
            if ($(this).val() === "") {
                alert("请输入您要的操作");
            } else {
                // 读取本地数据
                var local = getData();
                local.push({ title: $(this).val(), done: false });
                // 存储数据
                saveData(local);
                load();
                $(this).val("");
            }
        }
    });

    // 二.操作事项
    $("ol, ul").on("click", "input", function() {
        var data = getData();
        // 选中事项
        var index = $(this).siblings("a").attr("id");
        console.log(index);
        // 修改事项
        data[index].done = $(this).prop("checked");
        console.log(data);
        saveData(data);
        load();
    });

    // 三.删除事项
    $("ol, ul").on("click", "a", function() {
        var data = getData();
        console.log(data);
        // 选中数据
        var index = $(this).attr("id");
        console.log(index);
        // 删除数据
        data.splice(index, 1);
        saveData(data);
        load();
    });
    // 四.清空事项
    $(".btn-primary").on("click", function() {
        localStorage.clear();
        load();
    })




    // 1.声明getData读取本地存储数据 
    function getData() {
        var data = localStorage.getItem("todolist");
        if (data !== null) {
            return JSON.parse(data);
        } else {
            return [];
        }
    }

    // 2.声明saveData保存数据到本地
    function saveData(data) {
        localStorage.setItem("todolist", JSON.stringify(data));
    }

    // 3.声明load加载本地数据
    function load() {
        var data = getData();
        console.log(data);
        // 清空页面数据
        $("ol, ul").empty();
        var todoCount = 0;
        var doneCount = 0; 
        // 遍历数据
        $.each(data, function(i, n) {         
            if (n.done) {
                $("ul").prepend("<li><input type='checkbox' checked='checked' > <p>" + n.title + "</p> <a href='javascript:;' id=" + i + " ></a></li>");
                doneCount++;
            } else {
                $("ol").prepend("<li><input type='checkbox' > <p>" + n.title + "</p> <a href='javascript:;' id=" + i + " ></a></li>");
                todoCount++;
            }
        });
        // 显示事项个数
        $("#todocount").text(todoCount);
        $("#donecount").text(doneCount);
    }
})









