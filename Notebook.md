# 知识手册

<details>
<summary>细碎的小技巧</summary>

## 细碎的小技巧
1. 使用“标签名.类名”可快速补全一个包含类名的标签。(Emmet)
2. 快捷键：cmd + D：快速向下复制。
3. **CSS注释**: 使用`/* 注释内容 */`格式。
4. **CSS单位**: 常用单位包括`px`（像素）、`em`（相对于父元素字体大小）、`rem`（相对于根元素字体大小）、`%`（百分比）、`vh`（视口高度的百分比）、`vw`（视口宽度的百分比）。
5. `vertical-align`: 用于行内元素或表格单元格的垂直对齐方式（如`top`、`middle`、`bottom`）。
6. `outline`: 描边属性，类似于`border`，但不会占用空间。e.g. `outline: 1px solid red;`。
   -`outline: none;`：去除元素的轮廓线，常用于去除表单的焦点控制样式。
7. `input::placeholder`: 用于设置输入框的占位符样式。
   ```css
   input::placeholder {
       color: gray;
       font-style: italic;
   }
   ```
8. 注意`background-color: rgba(0, 0, 0, .4);`和`opacity: 0.4;`的不同,
   - `rgba`是颜色的透明度设置，影响背景颜色；
   - `opacity`是元素整体透明度，影响所有内容（包括文本和子元素）, 让整个元素及其子元素的可见度都变化.

9. 将`a`标签字体隐藏，可以使用`font-size: 0;`; 
10. SEO：搜索引擎优化，使用语义化标签（如`header`、`nav`、`article`、`section`、`footer`等）有助于提升网站的可读性和搜索引擎排名。
    - `title`标签：每个页面都应该有唯一的标题，使用`<title>`标签定义。
    - `description`标签：网页描述标签，使用`<meta name="description" content="页面描述">`提供页面的简要描述，有助于搜索引擎理解页面内容。
    - `keywords`标签：网页关键词标签，使用`<meta name="keywords" content="关键词1, 关键词2">`定义页面的关键词，有助于搜索引擎优化。

11. `Favicon`：网站图标，使用`<link rel="icon" href="favicon.ico">`定义网站的图标。ico文件放在网站的根目录即可。

</details>

<details>
<summary>HTML</summary>

## HTML

### HTML 的基本语法和结构

1. 基本的标签，注释，标题标签，段落标签，换行/水平线，文本格式标签（下划线那些），超链接标签，多媒体（图像、音频、视频）。
2. 列表（有序、无序、定义列表），表格（表头、表格标题、合并单元格），表单（文本框、单选框、复选框、下拉列表。
3. `button`的基本用法，包括`type`属性的`button`、`sumbit`、`reset`值。
4. 无语义标签div和span。
5. 字符实体（`&nbsp;`、`&lt;`、`&gt;`、`&amp;`）。

### 小重点

1. 使用`label`标签增强用户体验。
2. 对于`radio`单选，使用`name`属性分好组，否则没有单选效果。
3. `checkbox`是复选框; 下拉菜单是`select`内嵌`option`，不要搞混。

</details>

<details>
<summary>CSS</summary>

## CSS

### CSS 引入方式

内部样式（head嵌套style），外部样式（link引入），行内样式（style属性、配合JS）

### CSS 选择器

主要使用**标签选择器、类选择器、ID选择器**, 一些特殊选择器如下：

1. 后代选择器 e.g.
   ```css
   div p { color: red; } /*选择所有div内的p元素。*/
   ```
   
2. 子代选择器 e.g.
   ```css
   div > p { color: blue; } /*选择所有div的直接子元素p。*/
   ```
   
3. 并集选择器（逗号间隔，同时生效）
   ```css
   h1, h2 { color: green; } /*选择所有h1和h2元素。*/
   ```

4. 交集选择器（无间隔，表示“与”匹配）
   ```css
   div.p { color: purple; }  /*选择所有div且类名为p的元素。*/
   ```

5. 伪类选择器（如`:hover`、`:first-child`、等）
   ```css
   a:hover { color: orange; } /*当鼠标悬停在链接上时改变颜色。*/
   ```
   **P.S. 超链接的一些伪类: a:link、a:visited、a:hover、a:active**

6. 伪元素选择器（如`::before`、`::after`）
   ```css
   p::before { content: "Note: "; color: gray; } /*在每个p元素前添加文本。*/
   ```

7. **属性选择器**（选择具有特定属性的元素）
   ```css
   input[type="text"] { border: 1px solid black; } /*选择所有类型为文本的输入框。*/
   ```

### CSS 三大特性
1. **层叠性**: 多个样式规则可以应用于同一元素，浏览器会根据特定的优先级规则（如选择器的具体性）来决定最终应用哪个样式。
2. **继承性**: 某些CSS属性会从父元素继承到子元素，例如字体和颜色属性。如font-family、color等文字属性会被子元素继承；所以通常可以写在body标签内。
3. **优先级**: CSS规则的优先级由选择器的具体性决定。**!important > 行内样式 > ID选择器 > 类选择器 > 标签选择器 > 通配符 > 继承样式**

P.S. 如遇复合选择器，则需计算优先级。

### 标签的显示模式

1. **块级元素**: 独占一行，宽度默认填满父元素。e.g. `div`、`p`、`h1`等。
2. **行内元素**: 不独占一行，宽度仅包裹内容。e.g. `span`、`a`、`img`等。
3. **行内块元素**: 结合了块级和行内元素的特性，**允许设置宽高**，但不独占一行。e.g. `display: inline-block;`。

P.S. 使用`display`属性来控制或转换元素的显示模式。

### 文字控制属性

1. `font`系列: 
   - `font-family`: 字体系列
   - `font-size`: 字体大小
   - `font-style`: 字体样式（如斜体）
   - `font-weight`: 字体粗细
   - `font`: 复合属性，包含上述所有属性

2. `text`系列:
   - `text-align`: 文本对齐方式（左、中、右）
   - `text-indent`: 首行缩进
   - `text-decoration`: 文本装饰（如下划线）
   - `text-transform`: 文本转换（如大写、小写）

3. 颜色: 
   - `color`: 字体颜色
   - `background-color`: 背景颜色

4. 其它: 
   - `line-height`: 行高
   - `letter-spacing`: 字符间距
   - `word-spacing`: 单词间距

### 背景属性

1. `background-color`: 背景颜色
2. `background-image`: 背景图像, e.g. `background-image: url('image.jpg');`
3. `background-repeat`: 背景图像重复方式（如`repeat-x`、`no-repeat`、`repeat`、 `repeat-y`）
4. `background-position`: 背景图像位置, e.g. `background-position: 水平方向 垂直方向;`，取值包括`left`、`center`、`right`、`top`、`bottom`和`数字px`等。
   - **特殊写法1**:只写一个关键字，另一方向默认居中；只写一个数字px，则代表水平方向，且垂直方向居中；
   - **特殊写法2**:写关键字的顺序可以颠倒；
5. `background-size`: 背景图像大小, e.g. `background-size: cover;`（覆盖整个元素, 可能图片不全）或 `contain`（保持比例缩放以适应元素, 可能背景留空）。
6. `background-attachment`: 背景图像的滚动方式（如`scroll`、`fixed`、`local`）
7. `background`: 复合属性，包含上述所有背景属性。**不区分顺序，但若需缩放，则：`位置/缩放`。

### 盒模型

1. `border`: 边框线，如`border: 1px solid #66ccff;`；以及四个方向自定义； 
2. `padding`： 内边距，如`padding: 10px`；可以四个方向自定义；可以有复合写法，**顺时针（上-右-下-左、上-左右-下、上下-左右）**；
3. `margin`: 外边距，与`padding`相同。不会撑大盒子。必须有`width`属性。
   - **版心居中技巧**：左右`margin`设置`auto`，如：`margin: 0 auto`；
   - 内边距尺寸之撑大盒子的问题：`box-sizing: border-box`  -- **内减模式**；

其它重点：

1. 在CSS中，使用通配符选择器先清除默认样式，包括`margin`、`padding`、`border`等。
   ```css
   * {
       margin: 0;
       padding: 0;
       border: 0;
       box-sizing: border-box;
   }
   ```
   
2. `overflow`：控制盒子内容溢出，取值包括`hidden`、`scroll`、`auto`； 
3. `border-radius`：盒子圆角属性，写法：`border-radius: 10px / 5%`；以及复合写法，由左上角开始顺时针；正圆（正方形盒子，一半px或50%圆角）；胶囊（长方形盒子，高度一半的px）；
4. `box-shadow`，盒子阴影属性，写法：`box-shadow: 0(x) 0(y) 10px(模糊半径--柔和程度) 10px(扩散半径--大小) #66ccff inset(内阴影)`；
5. 外边距（垂直方向）合并现象：取`margin`较大值； e.g. 
   ```css
   .box {
       margin-top: 20px; /* 上外边距 */
       margin-bottom: 30px; /* 下外边距 */
   }
   ```
   - 如果父元素没有内容，且子元素有`margin-top`和`margin-bottom`，则父元素的高度会被子元素的`margin`合并。

6. 外边距塌陷问题：子级元素的margin属性导致的父级元素位移。解决办法：
   - `取消子级margin，设置父级padding`；
   - `为父级添加overflow:hidden`；
   - `为父级添加border-top`；
7. 行内元素的内外边距问题：默认情况下，垂直方向不会受到影响； 

### 浮动

1. `float: left | right | none`: 浮动元素会脱离文档流，后续元素会环绕在其旁边;
2. 清除浮动的方法：
   - `overflow: hidden;`：父元素设置此属性，自动清除子元素的浮动；
   - 单伪元素标签法
   - 额外标签法
   - 双伪元素标签法
   - `clearfix`类法：在父元素上添加一个类，使用伪元素清除浮动。
   - `clear`属性：在需要清除浮动的元素上设置`clear: both;`。

### Flex布局

1. **容器属性**:
   - `display: flex;`：启用Flex布局。
   - `flex-direction`: 主轴方向（`row`、`column`、`row-reverse`、`column-reverse`）。
   - `flex-wrap`: 主轴换行方式（`nowrap`、`wrap`、`wrap-reverse`）。
   - `justify-content`: 主轴对齐方式（如`flex-start`、`flex-end`、`center`、`space-between`、`space-around`）。
   - `align-items`: 侧轴（交叉轴）对齐方式（如`center`、`stretch`、`flex-start`、`flex-end`、`center`、`baseline`）。
     - 使用`align-items`前，记得指定`height`，否则无法生效。
   - `align-self`: 单个子元素的侧轴对齐方式（覆盖`align-items`）。
   - `align-content`: 多行对齐方式（如`center`、`space-between`、`space-around`、`flex-start`、`flex-end`、`space-evenly`、`stretch`）。
   - `flex: 1 | 2 | 3 | ...`: 子元素的伸缩比例，表示在剩余空间中分配的比例。

P.S. flex布局中，子元素会变成弹性盒子，因此对于`a`，不用刻意转变为块元素，宽高也可以生效；


### 定位

1. `position`，定位类型:
   - `static`: 默认定位，元素按照文档流正常排列。
   - `relative`: 相对定位，元素相对于其原始位置进行偏移。（不脱标且占位）
   - `absolute`: 绝对定位，元素相对于最近的已定位祖先元素进行定位。（脱标且不占位，具备行内块元素特点）
   - `fixed`: 固定定位，元素相对于浏览器窗口进行定位，不随滚动条移动。（脱标且不占位，具备行内块元素特点）
   - `sticky`: 粘性定位，元素在特定条件下表现为相对定位和固定定位的结合。
   - 使用口诀：**子绝父相**

2. `top`、`right`、`bottom`、`left`: 定位偏移量，取数字px或百分比值，配合`position`使用。（必需）
3. `z-index`: 层叠顺序，数值越大，元素越靠上层。**注意**: 只有定位元素（`position`非`static`）才会生效。
4. `transform`: 变形属性，常用于平移、旋转、缩放等效果。
   - `transform: translateX(50px);`：水平平移50px；以及`transform: translate(x, y);`（x和y可以是百分比或px）；都填入`50%`时，位移就各是宽高的一半；
   - `transform: rotate(45deg);`：旋转45度。
   - `transform: scale(1.5);`：放大1.5倍。
   - `transform: skew(20deg, 10deg);`：倾斜20度和10度。
   - `transform-origin`: 设置变形的原点，默认是元素的中心点，可以设置为`left`、`right`、`top`、`bottom`或具体的像素值。
   - **多重转换**：即：将`transform`用作复合属性。**注意：第一个改变会影响盒子的轴向，从而影响第二个改变。**

### 垂直对齐方式

可以通过这个方式去除行内块、图片底部留白（非baseline）

1. `vertical-align`属性用于行内元素或表格单元格的垂直对齐方式。常用值包括：
   - `baseline`: 默认值，元素基线对齐。
   - `top`: 元素顶部对齐。
   - `middle`: 元素中部对齐。
   - `bottom`: 元素底部对齐。

### 过渡效果

1. `transition`属性用于设置过渡效果，常用属性包括：
   - `transition-property`: 过渡的属性（如`color`、`background-color`等）。
   - `transition-duration`: 过渡持续时间（如`0.3s`）。
   - `transition-timing-function`: 过渡的速度曲线（如`ease`、`linear`、`ease-in`、`ease-out`等）。
   - `transition-delay`: 过渡延迟时间。
   - **复合写法**: `transition: 属性 过渡时间 速度曲线 delay;`。

P.S. `transition`过渡效果加在原元素，不要加在伪元素上（否则退出`hover`的时候没效果）

### 透明度

1. `opacity`属性用于设置元素的透明度，取值范围为`0`（完全透明）到`1`（完全不透明）。
   - 例如：`opacity: 0.5;`表示50%透明度。
   - 注意：`opacity`会影响元素及其子元素的可见度。

### 鼠标样式

1. `cursor`属性用于设置鼠标悬停时的样式，常用值包括：
   - `default`: 默认箭头。
   - `pointer`: 手形（通常用于链接）。
   - `text`: 文本选择光标。
   - `move`: 移动光标。
   - `not-allowed`: 禁止操作光标。
   - `wait`: 等待光标。

### 伪类和伪元素

1. **伪类**: 用于定义元素的特定状态。
   - `:hover`: 鼠标悬停时应用样式。
   - `:active`: 元素被激活时应用样式（如按钮被点击）。
   - `:focus`: 元素获得焦点时应用样式（如输入框）。
   - `:first-child`: 选择第一个子元素。
   - `:last-child`: 选择最后一个子元素。
   - `:nth-child(n)`: 选择第n个子元素（n可以是数字、公式或关键字）。
   - `:not(selector)`: 选择不匹配指定选择器的元素。 e.g. `E:not(:hover)`, 可以实现与hover互斥的效果，在非hover状态下呈现某种样式。:hover的优先级高于:not(:hover)。

   
</details>

<details>
<summary>JavaScript</summary>

</details>

<details>
<summary>AJAX</summary>

</details>

