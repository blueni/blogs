### Flex布局
flex布局比传统的position与float的方式布局简单且强大，由于移动端没有ie的存在，更好的flex就成了布局首选。

#### 一、Flex基本概念
任何一个元素都能指定为flex布局，块级可设置为`flex`，行级设置为`inline-flex`。
```css
div {
	display: flex;
}
span {
	display: inline-flex;
}
```
设置了`flex`布局的元素称之为“flex容器”，简称“容器”，而容器的子元素则称之为“flex项目”，简称“项目”。
设置为flex布局后，项目的`float` `clear` `vertical-align` 这些属性都将失去作用。

#### 二、Flex用法
flex与一般css不同，需要容器与项目配合设置属性来做好布局。

##### 2.1 容器的属性
1. `flex-direction`  项目排列方式 
	* row（默认值）
	* row-reverse
	* column
	* column-reverse

2. `flex-wrap` 项目一行排列不下时，换行排列方式
	* nowrap（默认值）
	* wrap
	* wrap-reverse

3. `flex-flow` 是flex-direction与flex-wrap的简写形式
	* 如 flex-flow: row nowrap

4. `justify-content` 项目对齐方式
	* flex-start（默认值）
	* flex-end
	* center
	* space-between
	* space-around

5. `align-items` 项目在垂直于排列方向（交叉方向）上的对齐方式
	* flex-start
	* flex-end
	* center
	* baseline
	* stretch（默认值）

6. `align-content` 换行的对齐方式，项目设置了flex-flow换行才起作用
	* flex-start
	* flex-end
	* center
	* space-between
	* space-around
	* stretch（默认值）

##### 2.2 项目的属性
1. `order` 排列顺序，order值越小，排列越靠前
	* 默认为0
	* 负数也行，排在0前面

2. `flex-grow` 项目放大比例
	* 默认为0，不进行放大
	* 其它项目数值/所有项目相加数值 = 项目占排列方向上的比例
	
3. `flex-shrink` 项目缩小比例
	* 默认都为1，全部等比例缩小
	* 值为0时不进行缩放

4. `flex-basis` 项目固定占有尺寸，如排列方向空间不足时，项目还是会缩小
	* 默认值为auto
	* 可设置为固定尺寸值

5. `flex` flex-grow flex-shrink flex-basis 的合并简写形式
	* 如flex: 1 0 auto

6. `align-self` 项目自己在交叉方向上的对齐方式
	* 默认继承容器的align-items
