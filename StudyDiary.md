# 学习进度跟踪

*此MarkDown用于记录自己的学习进度，也方便自己复习。*


## April 2025
<details><summary> 点击展开 / 关闭 </summary>

### Apr 08th, Tue, Day 19
- 「推进」
- 别无他事，持续推进JavaScript基础部分的学习
- 知识点总结：
  - **数组的使用**：`let arrayName = [data1, data2, 'data3'....]` 数组的数据可以是混合型的，甚至嵌套数组。
    - 下标/索引：从0开始; 取值：`arrName[n]`
    - 获取数组长度：`arr.length`
  - **常量**：`const G = 9.8` 在声明时必须赋值，定义后**不可修改**
  - **数字类型 Numbers**：整数、小数（浮点数）、正数、负数都统一为Numbers类型
    - NaN：也是数字类型，代表计算错误。具有粘性，任何对NaN的操作都会返回NaN
    - 搭配算术运算符运算： + - * / %；n ** x: n的x次幂
  - **字符串类型 String**：用单、双、反引号以及转义字符；单双引号可以互相嵌套；使用+号可以对两个字符串接
    - **模板字符串**：只能用反引号，内部可以接 ${expression}, expression代表变量或表达式，e.g.
      - `document.write(`Hello, my name is ${userName} and I'm ${userAge} years old.`)`
      - `document.write(`The larger one is ${String(a > b ? a : b)}`)`
      - 补充昨日对**输出语法**的用法：可以利用document.write('html codes')来输出html标签，配合模板字符串修改一些内容
      - e.g. `document.write(`<td>${price}元</td>`)` 在没学DOM操作前，先这么用着
      - 再补充：WebStorm检测到${}的输入会自动修正单引号
  - **布尔 Boolean**、**未定义 Undefined**与**空 Null**：
    - boolean： true / false
    - undefined：声明一个变量却未赋值等
    - null：赋值为空（将null作为尚未创建的对象）
    - *undefined 与 null 不同， 例如同样 +1 操作，前者返回NaN，后者返回1*
  - **数据类型检测 typeof 或typeof()**: 都一样，目前使用前者，较简洁；e.g. `console.log(typeof isReal)`
  - **类型转换**，分为隐式和显式
    - 隐式：
      - 对于+号，若两边存在一个字符串，则自动将另外一个转换为字符串；所以**任何数据和字符串相加的结果都是字符串**
      - 除+号之外的运算符，只要有数字，都换转换成数字
      - **单独使用+号**：可以转换成数字类型；e.g. `console.log(typeof '123') // string` `console.log(typeof +'123') // number`
    - 显式：
      - Number(x): 将x转换为数字类型；若字符串含非数字内容，则返回NaN
      - parseInt(x) & parseFloat(x): 取整数/小数部分；前提：字符串开头不能是非数字
      ```
      console.log(parseInt('12px12')) // 12
      console.log(parseInt('123.123px')) // 123
      console.log(parseFloat('123.123px')) // 123.123
      console.log(parseFloat('abc123abc')) // NaN
      ```
  - **赋值运算符**：=, +=, -=, *=， /=，%= ；和C++一样，没什么好说的
  - **自增运算符**：++i/i++, --i/i--; 和C++一样，依然格外注意看好是先自增还是先运算
    - 存在自增和运算并行的情况，需留意 e.g. `let i = 1 console.log(i++ + ++i + i) // 1 + 3 + 3 = 7`
  - **比较运算符**：和之前学过的C++大部分都一样，额外留意：
    - `==`：值相等；`===`：值和类型相等（全相等），**推荐使用**，对应 `!==`: 不全等
    - `undefined == null // true `
    - `NaN === NaN // false`
    - 本质：比较的是ASCII码值：`console.log('aa' < 'aac') // true`
  - **逻辑运算符：与或非**：记住优先级：`小括号 > 一元运算符(含!) > 算术运算符 > 逻辑运算符(先 && 后 ||)`
  - **if单/双/多分支**：和C++一致 if if-else if-else if-else
  - **三元运算符**：简化if双分支，一般用来取值（不限定，比较简洁，爱用就用）
    - `condition ? 满足条件所执行的代码 : 不满足条件所执行的代码`
    ```
     // Exercise：数字补0
     let input = Number(prompt('a number:'))
     document.write(`After formatted: ${input > 10 ? input : '0'+ input}`) // '0' + input: 隐式转换，拼接
    ```
  - **switch分支**：用来做条件匹配；注意 `case 值:` 中的值要和prompt输入的值全相等 p.s. 可以写`case (value): {多条 expressions}`，也可以`case value: 多条expressions`
    - 记得加break防止穿透
    - 记得加default:
  - **while循环**：和C++一样，注意continue是结束某次（某个条件的）循环（回到while起点），break是结束整个while循环
- 今天做了两个综合案例（以及很多小Exercise），1是day1的，prompt获取输入并打印到html表格中，知识点即**模板字符串**；2是while+switch循环，和以前学过的程序设计课程的知识类型，不难，及时温习就好。
- 今日达标完成任务。明天开启视频课Day3的学习。


### Apr 07th, Mon, Day 18
- 「里程碑1」
- 完成了H5C3的视频课学习。 *p.s.注意及时复习，并且常态化复习，不然容易忘记*
- 整理了新的目标，将学习React切换至学习Vue（虽然是4周之后的事了）
- 知识点总结：开启JavaScript的系统化学习！今天主要是基础引入：
  - **JS的书写位置**：和css一样，包括内联（行内），内部（在</body>标签上），外部（<script src='...'>）；写在底部的目的是，让页面按顺序从上往下加载，避免HTML元素加载不完全
  - **JS的注释**：和LESS一样的方式
  - **JS结束符号**：可写可不写，但要统一；（现阶段不写，简洁）
  - **输入语法**：`prompt('enter content here')`
  - **输出语法**: `document.write('...')`, `console.log('...')`, `alert('...')`
  - **变量**：`let 变量名 = 值` *忘记var吧！*
  - **命名规则**：仅`字母`，`数字`，`下划线`与`$`符号，数字不能开头；严格区分大小写；建议使用`小驼峰命名法`
  - 变量初始化与输入输出的结合：e.g. `let name = prompt('Please enter your name')`  `document.write(name)`
- 内容较为基础，加上本身有编程经验，所以上手很快。明天的内容预估总需8小时学习（含视频课Day1的一部分和Day2全部），明日也无事，就抓紧时间干起来吧！

### Apr 06th, Sun, Day 17
- 「迎接波澜」
- 清明假期的最后一天，上午忙于「社区」的面试（顺利通过），中午疲惫了些（昨晚不应该那么晚还硬吃辣泡面的），下午四点多才开始学习
- 晚上又突发快递相关的事件，耽误了一个多钟。虽然在赶快学了，但是Day 15的内容还是剩余大约1小时。
- 暂且接受吧，不能为了完成而完成，开倍速什么的不太好。加之又是重点内容，应该好好听讲才是。
- 知识点总结：
  - 进一步学习了媒体查询：
    - `max-width`：网页最大宽度值，意义是：在**视口小于等于**`max-width`时，（或者理解为“**在不大于最大值`max-width前`**”）媒体查询的CSS生效
    - `min-width`：网页最小宽度值，意义是：在**视口大于等于**`min-width`时，媒体查询的CSS生效
    - 在一份css中，若要检测多视口，对于顺序是有要求的（CSS的层叠性）
      - 对于`min-width`：由小到大；对于`max-width`：由大到小
    - 小案例：左侧隐藏-利用`max-width`，当视口小于到一定程度，利用`display:none;`使div隐藏
  - Bootstrap的学习：
    - 使用步骤：在正确的位置引入下载好的CSS/字体图标的CSS/JS，在需要的标签调用类名即可。注意link的层叠性，让自己的css在最后
    - 栅格系统：将整个网页等分12份，每个盒子占一定份数。如：一行4个盒子，则每个占3份
    - **响应断点**（断点之间形成区间）与 **类前缀** -- 意思是，在不同的区间内，你想分几个盒子，类名的选择是有要求的
    ```
    xs：<567px .col-
    sm：>=576px .col-sm-
    md：>=768px .col-md-
    ld：>=992px .col-lg-
    xl：>=1200px .col-xl-
    xxl：>=1400px .col-xxl- 
    ```
    - 格式：`container -> row(实现flex) -> col-*-*(在什么区间，占多少份)`
    - 例如：`<div class="col-xl-3 col-md-6 col-sm-12">1</div>`（4个div），依次实现：
      - 在大于等于1200px，一行排4个盒子（每个3份 -- col-xl-3）
      - 大于等于768px，一行排2个（每个六份 -- col-md-6）
      - 大于等于576px，一行排1个（独占12份 -- col-sm-12）
    - Button样式：先给btn添加默认样式，再加入需要进一步实现的样式。例如：`<button class="btn btn-success btn-sm">小success</button>`
    - 表格类样式：与Button类一样，需要优先为table标签添加一个`table`类的默认效果，在依次给不同表格类标签（包括table，tr，th，td等）添加想要的效果
    - **Bootstrap组件**：从官网上可以复制各种组件。如需修改，只要观察结构（html也好，网页检查器也好），修改结构或css即可
      - 注意：部分CSS含`!important`最高优先级，所以修改时，自己也要加，确保层叠有效
    - 字体图标：如前面所言，下载后引入css文件，写类名即可，和iconfont相似。
      - p.s.官方文档中，需要写两个类名，但其实写一个也可以;例如：`<span class="bi-apple"></span>`
  - 综合案例：响应式布局与Bootstrap组件使用 -- 复刻「腾讯全端」网站首页 --能用框架就不必自己写
    - 目前完成了nav导航栏，主要工作包括复用bootstrap的导航栏组件，调整
      - `container-fluid`改`container`即可实现版心居中（fluid定义宽度100%）
      - 官网position部分提供了top定位，最外层加入`fixed-top`类名即可fixed定位
      - 调整`navbar-brand`与`nav-item`的位置：对于`nav-item`，`flex-grow`即`flex`的一个拆分，现不需要其占位（1），取消掉即可（container本身有space-between在，自然左右分开）
      - 视频课没出现的问题，但是在此有所呈现：对于li标签中的a的文字内容，英文字符再长也可以撑开（理想状态），而中文字符超过两个字就会竖排，推测；
        - Bootstrap 的 flex 布局没有默认限制文本换行，加上 中文文本的连续性，导致在 <li> 宽度未明确定义时，文字换行后视觉上显得“竖排”
        - 解决：加了 `white-space: nowrap` 后，强制文本不换行
- 总的来说，今天确实还算有点事多，加上午休休多了点，晚上又有别的事，所以Day15还剩一点内容（一个半小时左右）。
- 在可预见的明天，应该没什么事了，把内容收尾，复习复习，然后开启Javascript的学习吧！

### Apr 05th, Sat, Day 16
- 「拥抱不一样的波澜」
- 清明节假期，经由日前时樾学姐与沐琮学姐的指引，以及今日与容熠学长的5小时面对面交流，收获良多建议，例如
  - 对软实力的重视与提升，多维度成长
  - 更加主动地去争取与创造机会，扩展圈子，拓宽人脉，接触资源
  - 用行动对抗焦虑与迷茫
  - 获得了社区面试的机会，晚上在写申请书
- 但愿明日顺利，也愿自己更好地「多维度成长」
- 今天的CodeSprint40计划暂时搁置了，但，起码不是负面影响吧！毋需恪求绝对完美，「拥抱一些不一样的波澜」，也许是顺水推舟呢？
- 加油，明日面试自然放松即可，成与败皆有收获。回来后继续推进CodeSprint40，为JavaScript开启新阶段！

### Apr 04th, Fri, Day 15
- 「不一样的波澜」
- 知识点总结
  - **SEO补充**：对网站logo使用SEO优化时，采用h1嵌套a，例如
  ```
  <div class="logo">
        <h1><a href="#">小兔鲜儿</a></h1>
  </div>
  ```
  - 然后在css中设置`.logo a {font-size: 0; background-image: url(...)}`
  - 今天的[案例](HTML5_CSS3/Day_15_移动端适配方案2/综合案例-酷我音乐-移动端/index.html)不用，所以不需要h1嵌套，写div即可；想到了，所以复习一下
  - `Background`属性补充（强调）：在复合写法中，`bg-size(contain, cover等)`必须跟在`position`后面，以`/`分隔，否则会有错误。正确实例：`center/contain`
  - **正式引入vw与vh单位**：
    - 都是相对于「视口」的单位，1vw = 1/100 视口宽度，1vh = 1/100 视口高度
    - 与rem一样，对于设计稿中的px单位，需要转换成vw/vh单位
      - vw = 设计稿呈现的px / （设计稿参考设备的视口宽度/100）
      - vh = 设计稿呈现的px / （设计稿参考设备的视口高度/100）
      - 例如：定义变量`@vw: 3.75vw`；使用： `width: (50 / @vw);`
      - 注意：在开发中，vh不建议与vw混用，因为「全面屏」等设备的视口高度会有所不同，混用可能导致盒子变形 
    - 其他知识点
      - `position:sticky;`与`position: fixed;` 有些许差异，表现在：
        - fixed 
          - 基于浏览器视口
          - 完全脱标，后续元素会顶上来，可能需要为其他元素添加margin或使用空白盒子占位
          - 转变为行内块，需要手动处理「宽度变窄」（设置width:100%）
        - sticky
          - 基于最近的滚动父容器
          - 半脱离文档流，仍然占位
          - 保留块级特性，不一定需要设置宽度
          - 必须指定 top、bottom、left 或 right 中的一个，不然不起作用。
          - 父容器要有滚动（overflow: auto 或 scroll），而且父容器高度要大于 sticky 元素本身。
      - `object-fit: cover `
        - 和bg-size一个道理，取值也相同。不过object-fit适用于对img标签的调整，bg-size则专注于background系列
      - 再次强调：使用了display:flex的标签/元素，使用align-item / justify-content等调整子元素的属性前，必须设置宽高，否则本身只能被弹性内容撑开，上述属性效果不佳
- 今天状态蛮正常，但是晚上遇到一些比较新奇的事，我称之为不一样的波澜——纵然有所耽搁吧，但也算是一次有益的交流。
- 明日早上参加完心里交流会后，继续完成视频课Day15的内容，并做一次复习。后天开启JS的学习。



### Apr 03rd, Thu, Day 14
- 在足够的欲望面前，其他的小杂念又算什么？
- 今天是清明节假期前一天，图书馆很空。心情多少有点受影响，不是难过，不是压抑，就是复杂。但取得offer的渴望足够强大，我无论如何都要前进。
- 移动端适配方案
  - 了解了**谷歌模拟器**，可以在Chrome的 网页检查器 中选择移动设备
    - 小技巧，使用网页检查器时，查看PC布局，一般在下面；查看移动端，一般在侧面
  - **屏幕分辨率**、**视口与二倍图**
    - 硬件分辨率：物理分辨率（出厂设置）
    - 缩放调节的分辨率：逻辑分辨率（由软件/驱动/操作系统等设置）
    - PC端网页分辨率与逻辑分辨率保持一致
    - iPhone 6/7/8 -- 逻辑分辨率375px；plus -- 414px
    - **视口**：移动端网页分辨率并非逻辑分辨率。视口是，显示HTML网页的区域，使用视口约束HTML尺寸。使用HTML5自动骨架中就可以生成。
      - `<meta name="viewport" content="width=device-width, initial-scale=1.0">`
    - **二倍图**：现阶段设计稿参考iPhone 6/7/8，以375px的设备宽度产出设计稿；则二倍图设计稿的尺寸即为750px。为确保缩放、比例关系正确，在pxcook、html等设计稿中，要切换2x模式。
  - **适配方案**
    - 宽度适配：宽度自适应
      - 百分比布局｜Flex布局
      - 适用于PC端
    - 等比适配：宽高等比缩放
      - rem｜vw
      - 适用于移动端
  - rem适配方案
    - rem:相对单位，相对「HTML标签字号」的结果。即：最终像素值 = rem值 * HTML标签字号
    - 媒体查询 -- 可以用于检测视口宽度，编写差异化的CSS样式 -- 当某个条件成立，执行对应的CSS样式，格式：
    ```
    @media (媒体特性/需要查询的媒体 -- 没有多余的分号) {
      选择器 {
        CSS属性;
        }
      }
    ```
    ```
      @media (width: 375px) {
            html {
                font-size: 37.5px;
            }
        }
      ```
    - 实际工作中，不太可能为每个视口都单独编写这样的代码，于是引入一个js文件：flexible布局，以实现自适应：
      - `<script src="js/flexible.js"></script>`
    - 于是在实际中，就有 rem单位值 = 实际px值(来自设计稿) / 根字号(常设置成变量，如@rootSize: 37.5px)
    - 补充：目前rem布局方案中，将网页等分成10份，HTML标签的字号视为视口宽度的 1/10（flexible布局会计算好）
  - **less相关**
    - less注释：//…… 单行注释 ｜  /* …… */ 块级注释 -- 注意，在less中写的单行注释不会保留到css文件
    - **运算**：记住`margin: (68/37.5)rem;`即可，加减乘如上，除法必须带括号。**注意：**如果两个数字都带单位或更多单位，以「第一个」单位为准
    - **嵌套**：字面意思，在一个标签里面写另一个标签。相当于后代。和之前用过的sass一样。新的知识点，在嵌套中使用`&`，代表自己，常与hover伪类，子代结构伪类配合使用，例如
    ```
    a {
      text-decoration: none;
      &:hover {
        color: #00BE9A;
      }
    }
    ```
    - 变量：存储数据，方便多处使用与统一修改。定义变量：`@变量名：数据; ` -- 不要漏掉分号。如`@rootSize: 37.5rem;`，`@myCyan: darkcyan;`
    - 导入：`@import "path/to/less";` -- 不要漏掉分号；如果是less文件，后缀可以不保留。
    - 导出：代码：在less文件的**第一行：**`// out: ./index.css ` -- 没有分号；或**禁止导出：**`// out: false`
      - 备注：WebStorm似乎是有自动编译，less文件创建即编译，所以导出就不太好测试，知道即可。
  - 完成了一个综合案例，主要是移动端的布局，知识点包括less的导入，rem适配方案等。
- 纵然今天事有点多，内心有些复杂的情感（明日是假期），但依然完成了视频课Day 13的内容，没有太落后进度。
- 我现在特别想要去操场跑步，所以Push之后我也要去“Push”一把，泄一泄压力。明天完成视频课Day14、15的内容，收尾H5C3，开启JavaScript！

### Apr 02nd, Wed, Day 13
- 「Distance」
- 积压的宿舍情感终于在这一天爆发与释怀，我不必再对没有自知之明的人抱有任何期待，愤怒之后，是释怀。也对自己的目标，更加清晰。这就是，我与他们的「Distance」
- 今天花了点时间平复情绪，不算压抑，更多是释怀；加之上午有课，所以进度慢了些，没有能彻底追平视频课。但至少没有被拉开。
- 不管怎样，今日还是学了不少内容，而且都很新，需要多复习：
  - 空间转换之缩放：`transform: scale3d(x,y,z)`，理解成长方体的长宽高就行
  - **动画** -- 今日重点：
    - 属性 animation，值为复合型，包括：动画名称 动画花费时长s（此二者必写）｜ 速度曲线 重复 交替（动画方向）延迟时间 结束时状态 
      - 动画名称：自己定义的名称，如@keyframe move，则move就是动画名称
      - 花费时长 & 延迟启动时间：数字s，两个一起出现，前者为花费时长，后者为延迟时间
      - 速度曲线：默认非线性动画，可填入linear --线性｜steps(n) --n帧分步动画
      - 重复：可填入次数，或者infinite无限循环
      - 交替/动画方向：填入alternate以实现往返效果
      - 结束时状态：backwards --默认，第一帧状态｜afterwards --最后一帧状态
    - 以上均可单独拆分为单个属性，另外有一个额外的拆分属性：animation-play-state: paused --暂停 --常与hover配合使用，按需求决定放在原元素还是hover伪元素里
    - **使用动画**，分两步
      - 定义动画： `@keyframe animation-name {
          from { CSS; }
          to { CSS; } } ` 
      - 或` @keyframe animation-name {
          0% { CSS; }
          20% { CSS; }
          ...
          100% { CSS; } } ` 
      - 注意，没有多余的分号或逗号
      - 第二步，哪个标签要用，就在哪个标签的css中写，如：`animation: cloud-move 1s linear infinite alternate 0.8s`
    - 逐帧动画，使用「速度曲线」，`animation-timing-function: steps(n)`，配合精灵图实现精灵动画
      - 定义显示区域（精灵图展示窗口）
      - 注意，定义动画中，移动的是背景图，用background-position，用transform的话父盒子会位移
      - 移动距离 = 精灵图宽度
      - steps(N)，N与精灵小图个数相同
      - 多组动画，即在animation属性中填入多个动画。
- 今天Day 13，完成了视频课Day12的内容，明天时间充裕，完成Day13&14的内容；后天Day15，完成Day15，收尾。

### Apr 01st, Tue, Day 12
- 「稳中有进」
- 今天按期完成了目标。完成了视频课Day10的内容（复制黏贴等工作挑时间补齐就好）；完成了Day11，并开启了Day12（部分），与CodeSprint Day12追平。
- 明日Day13：学习与完成视频课Day12，Day13，正式追平实际状态。
- 今日总结：内容较多，主要内容是更多的CSS（动态CSS）
  - 用`align-items`前，记得指定宽高，否则没效果（虽然生效）
  - **平面转换 transform**：一般配合过渡 transition 使用。再次强调，transition 通常写在原元素中而非 hover 伪类
  - 可以转换的内容包括：`translate（位移）｜rotate（旋转）｜scale（缩放）｜skew（倾斜）`
    - 位移 -- transform: translate(x轴，y轴)，可以单独填写一个值（X轴），也可以translateX或translateY单独调整。值为百分比（参照自身尺寸）或像素值
    - 旋转 -- transform: rotate(旋转角度deg)，同样地，可以X，Y单独设置。正值顺时针，负值逆时针。
    - 改变平面转换的原点 -- transform-origin: 水平原点位置 垂直原点位置。值为各方位名词。默认为盒子中心点。
    - 多重转换 -- 即：将transform用作复合属性。注意：第一个改变会影响盒子的轴向，从而影响第二个改变。
    - 缩放 -- transform: scale(缩放倍数 | x轴缩放倍数，y轴缩放倍数)。通常用第一种。默认基于盒子原点。
    - 倾斜 -- transform: skew(旋转度数deg)  --正值向左，负值向右。
  - **线性渐变** -- background-image: linear-gradient();
    - background-image: linear-gradient (
    - 渐变方向, (默认从上到下｜to 方位词｜角度值deg -- 以x轴为0度)
    - 颜色1 终点位置,（默认无｜百分比值） 
    - 颜色2 终点位置, 
    - ...); （最后的颜色不需要逗号）
  - **径向渐变** -- background-image: radial-gradient(
    - 半径 at 圆心位置, 
      - -- 半径：单独 或 双值（变成椭圆）：x轴 y轴 
      - -- 圆心位置：水平位置 垂直位置 -- 取值：方位名词｜像素单位值｜百分比（不常用） 
    - 颜色1 终点位置, 
    - 颜色2 终点位置, 
    - ... 
    - 颜色n 终点位置  -- (无逗号)
    - );
  - **空间变换**：依然是transform
    - transform3d(x, y, z); --3d必须写三个值，否则不生效 
    - transform:translateZ();
  - 视距：perspective -- 添加给父级。从而更好观察子级的动效果。常用值800-1200px。
  - 空间旋转：
    - transform: rotateZ(值deg) 
    - transform: rotateX(值deg) 
    - 从各个轴的正方向看去：正值顺时针，负值逆时针
    - 亦即 -- 左手法则：大拇指与各个轴的正方向相同，四个手指弯曲方向即为旋转的正方向
- 完成了2个小案例，4个综合案例。明日需要及时复习与消化。

</details>

## March 2025
<details>
<summary> 点击展开 / 关闭 </summary>

### Mar 31st, Mon, Day 11
- 「尽力就好」。
- 今天总体效率还算可以，只是因为晚上还要上课，否则多出来的两小时确实可以完成视频课Day10的内容并开启Day11。
- 总之，在Day11，完成了大部分视频课Day10的内容；明天Day12，收尾Day10，完成Day11，如果可以，Day12也开启，追平之前「波动」导致的落后。
- 内容总概：依然在完成「小兔鲜儿」网页的制作，完成了footer，banner，好物，推荐，品牌，生鲜共计6个板块。总体内容跟得上，有些新的知识点或需要强调的知识点：
  - 对于轮播图，连续放置（flex）几张图片，这会被父盒子挤压，所以设置父盒子宽度（例如为ul设置宽度300%以容纳三张图）；然后会溢出，在父盒子使用overflow:hidden解决，例子见[CSS banner 轮播图](/HTML5_CSS3/Day_10_xtc-pc/css/index.css)（24行）；
  - `E:not(:hover)`:意外发现的新技巧，可以实现与hover互斥的效果，在非hover状态下呈现某种样式；例如[CSS轮播图小圆点](/HTML5_CSS3/Day_10_xtc-pc/css/index.css)（98行）：当整个ol非hover，第一个圆点高亮；进入hover状态，原高亮消失，hover到哪儿，哪儿高亮。退出hover状态，第一个圆点恢复高亮。
  - :hover的优先级高于:not(:hover)
  - 注意margin塌陷问题，多考虑使用`overflow:hidden`来解决。
  - transition过渡效果加在原元素，不要加在伪元素上（否则退出hover的时候没效果）。
- 大体上就这些。最后一点，在案例复现上，还是选择先听课后敲代码的方式，耗时就耗时吧；如果一边看一边敲，自己的思考程度会降低。

### Mar 30th, Day 10
- 「加紧」。
- 心态更加稳定，按计划前进。
- 白天场：完成了视频课Day08的内容，主要包括：
  - 定位：`position: relative | absolute | fixed` ；
  - 需要配合边偏移：`top | right | bottom | left : 数字px / 百分比`；
  - `relative`（参照原先自己的位置）：不脱标且占位；
  - `absolute（相对从最近的祖先级到浏览器） | fixed（相对浏览器窗口）`：脱标且不占位，具备行内块元素特点（宽高生效)；
  - 记住一个口诀：`子绝父相`;
  - **新属性**：`transform: translate(x, y)`，以及单独的`translateX`、`translateY`；都填入`50%`时，位移就各是宽高的一半；
  - 堆叠层级：`z-index：数字`（越大越上面）；
  - CSS精灵：通俗理解，就是“想像”成所有小图合成在一张大图（精灵图的背景），设定盒子宽高（所谓展示窗口），然后通过背景定位来显示不同的小图；
  - 字体图标：1.引入css；2.为需要的标签指定两个类名；
  - 垂直对齐方式：`vertical-align: baseline（基线对齐，默认）| top | middle | bottom`；可以通过这个方式去除行内块、图片底部留白（非baseline）；
  - 过渡效果：`transition`：属性（如background-color） 过渡时间（如0.5s） 过渡方式（如ease-in-out）；
  - 透明度：`opacity`: 0.5（0-1之间）；印证了昨天提到的和background-color: rgba()的不同；
  - 鼠标样式：`cursor: pointer | default | text | move` 等；
- 完成了两个综合案例，分别是对CSS精灵的运用以及轮播图效果的学习（flex布局，定位）等。
- 晚上场：开始制作“小兔鲜儿”网页，这是视频课中「基础班」的最综合案例。
  - SEO：搜索引擎优化。`title`：网页标题标签；`description`：网页描述标签；`keywords`：网页关键词标签；（后两个是meta标签中的name属性值）；
  - Favicon：网站图标，出现在标题栏：`<link rel="shortcut icon" href="favicon.ico" type="image/x-icon">`（ico文件放在网站的根目录即可）；
  - 设计流程记录：
    - 版心居中：`margin: 0 auto`；于common.css中设置，方便复用；
    - 快捷导航：通栏 > 版心 > 导航ul（flex布局）
    - 头部header：版心 > logo + nav + search + cart。
- 今天就完成到这里，其实效率还不错，day9差一个底部（估计一小时）；可惜昨晚睡得迟了些，早上没时间。所以，继续保持良好规律吧，明天加油。

### Mar 29th, Day 09
- 「稳住」。
- 自昨天内心的自我怀疑后，现在的心态已经更好。明确目标：H5+C3+JS6+React+Git/WebPack等，再做出一到两个个人项目，5月中上旬投简历，期望中下旬上班。
- **目标够明确，欲望够明确，就无须再被干扰。只管奋力向前。体会网页开发的乐趣。**
- 今天的学习，主要是继续完成昨天的网页制作。整体跟做不算难，算是对过去所有（没系统学习前端时）、及前面8天的H5C3知识的综合运用。成品：[学成在线（静态页面）](HTML5_CSS3/Day_09_做网页之学成在线/index.html).
- 充分体验了更系统的**从整体到局部，由上到下，由左到右，由内到外**的规范开发历程，颠覆了以往自己“小作坊”式的反复拼凑、调整的经历。
- 一些新的知识点与一些注意点：
  - `vertical-align`: 行内块和行内垂直方向对齐方式。如：`vertical-align: middle`；用法见第一次完整网页制作的[index.css](HTML5_CSS3/Day_09_做网页之学成在线/css/index.css)的124行；
  - `outline: none;`：去掉表单的焦点控制；
  - `.search input::placeholder {font-size: ... }`：通过此方式控制表单控件中placeholder文字的属性；
  -  注意`background-color: rgba(0, 0, 0, .4);`和`opacity: 0.4;`的不同，前者是单独调整背景的透明度，后者会让整个元素及其子元素的可见度都变化；
  - **对结构伪类选择器的理解：**`.recommend .wrapper ul li:nth-child(9) a`是指第9个li元素里的a标签；（意思是，当li嵌套a时，是li在重复；所以迭代的是li 而非 a；然后要选中li中的a标签）
  - flex布局中，子元素会变成弹性盒子，因此对于a，不用刻意转变为块元素，宽高也可以生效；
  - 将a标签字体隐藏，可以使用`font-size: 0;`;
- 其它：
  - 跟视频课时，就暂且不要那么“任性”了，类名和结构跟着视频走就好，也方便检查。
  - 因为纵然网页设计起来，确实有不同方案（今天也证明了，不按教学里设计，也是可以的），但还是留到后面自己复刻或做作品的时候再发挥吧。
  - 忍住！先别着急用SCSS。
  - 明日目标：快马加鞭，完成视频课day8 day9的内容，尽量做day10的内容，弥补之前的波动节奏。


### Mar 28th, Day 08
- 「波折」。
- 我的内心遭受挑战，总不禁想着与人对比。但思来想去，明白我不应陷在过去的后悔里。**眼前的代码，就是回答未来的答案。**-15:37.
- 上午+下午（没吃午饭）：约3小时，主要学习了浮动（float）和Flex布局等知识：
  - **浮动**：`float: left | right | none`；浮动元素会脱离文档流，后续元素会环绕在其旁边；
  - **清除浮动**：包括`overflow:hidden`、`额外标签法`，`单伪元素标签法`、`双伪元素标签法等`；
  - **Flex布局**：`display: flex`，可以设置的点包括：
    - 主轴对齐：`justify-content: center | space-between | space-around | space-evenly | flex-start | flex-end`；
    - 侧轴对齐：`align-items(父级) / self(子级): center | stretch | baseline | flex-start | flex-end |`；
    - 主轴方向修改：`flex-direction: row | row-reverse | column | column-reverse`；
    - 弹性伸缩比：（写在子级，相当于占位权重/比例）`flex: 1 | 2 | 3 | ...`；
    - 主轴元素换行：`flex-wrap: nowrap | wrap | wrap-reverse`；
    - 行对齐方式：`align-content: center | space-between | space-around | space-evently`；
  - 完成了一个综合案例。
- 晚上场：开始做一个完整的网页，学习了网页布局思路，目前在做header。目前的难点感觉在于各种距离的设置。明天跟视频敲完后，定个时间再自己敲一遍。

### Mar 27th, Day 07
- 「加速」。
- 上午：2小时，主要学习了：
  - **（重点）CSS的背景属性：**，如：
    - background-color：背景颜色；
    - background-image: `background-image: url('图片地址')`；
    - background-repeat: `background-repeat: no-repeat | repeat-x | repeat-y | repeat(default)`；
    - background-position: `background-position: 水平方向 垂直方向`；取值包括: `center | left | right | top | bottom | 数字px`；
      - **特殊写法1**:只写一个关键字，另一方向默认居中；只写一个数字px，则代表水平方向，且垂直方向居中；
      - **特殊写法2**:写关键字的顺序可以颠倒；
    - background-size(大小与缩放)：`background-size: cover(充满背景，可能图片不全) | contain(图片触边，可能背景留空) | auto | 数字px(不常用)`；
    - background-attachment：`background-attachment: fixed(固定) | scroll(滚动)`；
    - 以及复合属性 background；不区分顺序，但是若需要缩放，则：`位置/缩放`。
  - 标签的显示模式：块级元素（如div、h1等）和行内元素（如span、a等），以及行内块元素；
  - （细节）用display属性来控制或转换元素的显示模式。
- 综合昨天的知识和今早的新知识，做了两个综合案例。
- *新的快捷键：cmd + D：快速向下复制。*
- 下午与晚上场：5～5.5小时。学习了包括：
  - 伪类选择器（nth-child()等）、伪元素选择器（E::before/after）等；
  - **重点：盒子模型**，包括：
    - 边框线：border，如`border: 1px solid #66ccff;`；以及四个方向自定义；
    - 内边距：padding，如`padding: 10px`；可以四个方向自定义；可以有复合写法，**顺时针（上-右-下-左、上-左右-下、上下-左右）**；
    - 内边距尺寸之撑大盒子的问题：`box-sizing: border-box`  -- 内减模式；
    - 外边距：margin，与padding相同。不会撑大盒子。必须有width属性。**版心居中技巧：左右margin设置auto，如：** `margin: 0 center`；
  - 更多重点，包括：
    - 在CSS中，使用通配符选择器先清除默认样式，包括`margin`，`padding`，`box-sizing: border-box`等；
    - 盒子内容溢出，使用属性 `overflow`，包括`hidden`、`scroll`、`auto`；
    - 外边距（垂直方向）合并现象：取margin较大值；
    - 外边距塌陷问题：子级元素的margin属性导致的父级元素位移。解决办法：`取消子级margin，设置父级padding`；`为父级添加overflow:hidden`；`为父级添加border-top`；
    - 行内元素的内外边距问题：默认情况下，垂直方向不会受到影响；
    - 盒子圆角属性：`border-radius`，写法：`border-radius: 10px / 5%`；以及复合写法，由左上角开始顺时针；正圆（正方形盒子，一半px或50%圆角）；胶囊（长方形盒子，高度一半的px）；
    - 盒子阴影属性：`box-shadow`，写法：`box-shadow: 0(x) 0(y) 10px(模糊半径--柔和程度) 10px(扩散半径--大小) #66ccff inset(内阴影)`；
  - 完成了两个综合案例，其中综合案例2非常具有代表性，建议多复习。

### Mar 26th, Day 06
- 「稳步」。
- 今天主要学习了CSS的一些进阶内容，包括：
- 复合选择器：如昨日提到的**后代选择器**，以及新的**子代选择器**，**并集选择器（逗号隔开，同时生效）**，**交集选择器（无间隔，表示“与”匹配）**
- 伪类选择器：主要学习了**hover**（鼠标悬停；任何标签到可以使用）；以及超链接的一些伪类（如a:link、a:visited、a:hover、a:active）
- 学习了CSS的三大特性：
  - 继承性：如font-family、color等文字属性会被子元素继承；所以通常可以写在body标签内。
  - 层叠性：后面定义的样式会覆盖前面的样式（如有冲突）。
  - 优先级：!important > 行内样式 > ID选择器 > 类选择器 > 标签选择器 > 通配符 > 继承样式
  - 拓展：如遇复合选择器，则需计算优先级。
- 最后学习了一些Emmet写法：通过一些快捷方式，由IDE自动补全代码。
- 今天时间不多，没有做更多综合案例。明天加把劲！

### Mar 25th, Day 05
- 「推进」。
- 今天正式开始CSS的学习。主要学习了CSS的基础。包括：
- 引入方式：内部样式（head嵌套style），外部样式（link引入），行内样式（style属性、配合JS）。
- 选择器：标签选择器、类选择、ID选择、后代选择器（未讲，属于此前已学习的知识）
- 文字控制属性：
  - font-family：字体；font-size：字号；font-style：样式（倾斜等）；font-weight：粗体；font：复合属性；
  - text-align：对齐方式；text-indent：首行缩进；text-decoration：文本装饰（下划线）等；*text-transform：大小写转换；*
  - line-height：行高； *letter-spacing：字母间距；word-spacing：单词间距；*
  - color：字体颜色；background-color：背景颜色；
- 小技巧：使用“标签名.类名”可快速补全一个包含类名的标签。

### Mar 24th, Day 04
- 「恢复」。
- 上午：学习了button的基本用法，包括type属性的button、sumbit、reset值。
- 下午：积极调整状态。学习了无语义标签div和span，以及字符实体（&nbsp;、&lt;、&gt;、&amp;）
- 综合了这一章节的内容，完成了两个综合案例。01主要是对列表的运用，02则是对表单的运用。其中，使用label标签来增强用户体验这一点很“新”，需要多用。
- 一些重点：
  - 对于radio单选，使用name属性分好组，否则没有单选效果。
  - checkbox是复选框；下拉菜单是select内嵌option，不要搞混。
  - 多用button，熟悉button。

### Mar 23rd, Day 03
- 注意饮食，吃坏肚子导致状态不佳了。
- 信息熵减。

### Mar 22nd, Day 02
- 休息的一天。
- 思考了一些哲学问题，写了点日记，和Grok聊心，心情放松很多。
- 不过没时间写代码了……比较可惜。周日加把劲吧！

### Mar 21st, Day 01
- 梳理了一下Git的基本用法，包括在GitHub上建仓库（不要有初始化选项），Commit与Push，Pull等；并意识到一个关键：在Push前先Pull一遍，避免其他修改的冲突。即“Pull - Commit - Push”。
- 学习（复习）了HTML的基本语法和结构，基本的标签，注释，标题标签，段落标签，换行/水平线，文本格式标签（下划线那些），超链接标签，多媒体（图像、音频、视频），完成了两个十分简单的案例。
- 学习（复习）了列表（有序、无序、定义列表），表格（表头、表格标题、合并单元格），表单（文本框、单选框、复选框、下拉列表；第二日打算从“按钮”部分继续）。
- 今日有效学习时约：4～5小时，保持合理时间分配（如必要的中断休息），提高效率。再接再厉！

</details>
