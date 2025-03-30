# 学习进度跟踪

*此MarkDown用于记录自己的学习进度，也方便自己复习。*


## March 2025
<details><summary> 点击展开 / 关闭 </summary>

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
- 晚上场：开始制作“小兔鲜”网页，这是视频课中「基础班」的最综合案例。
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
- 今天的学习，主要是继续完成昨天的网页制作。整体跟做不算难，算是对过去所有（没系统学习前端时）、及前面8天的H5C3知识的综合运用。成品：[学成在线（静态页面）](Day_09_做网页之学成在线/index.html).
- 充分体验了更系统的**从整体到局部，由上到下，由左到右，由内到外**的规范开发历程，颠覆了以往自己“小作坊”式的反复拼凑、调整的经历。
- 一些新的知识点与一些注意点：
  - `vertical-align`: 行内块和行内垂直方向对齐方式。如：`vertical-align: middle`；用法见第一次完整网页制作的[index.css](Day_09_做网页之学成在线/css/index.css)的124行；
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
    - background-size：`background-size: cover(充满背景，可能图片不全) | contain(图片触边，可能背景留空) | auto | 数字px(不常用)`；
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