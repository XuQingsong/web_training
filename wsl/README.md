## 点评

### 第一阶段
针对第一阶段每个测试的代码点评

#### 第一阶段html模块测试评价
总的来说，代码结构和html元素的使用都是没问题的，有几个小问题，后面可以注意一下：
1. form.html中label的使用有点小问题，你在label元素中加了for属性的话，最好在前面加上id，那样才能实现点击文字选中的功能。*我给你的代码添加了一个示例*
```html
<input type="radio" name="gender" value="male" id="male"><label for="male">男</label>
```
2. resume.html中的nav应该去表示外链，就是链接到其他的页面，应该用链接来表示。如< a href="table.html">跳转表格< /a>。 aside应该用来内链，链接到本页面的其他内容，也就是锚链接。如< a href="#basic">基本资料< /a>
*理论上，你写的也没问题，但是从html的字义上来讲，最好还是按照我讲的方式来写nav和aside*