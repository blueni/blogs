### 为什么用loading
前端经常有跟后端进行数据交互，在等待服务端返回数据的过程中，一般在前端显示正在加载的状态来让用户明白网站正在响应中，而不是挂了。

### 前端loading实现
前端最简单的处理方式是用一张加载动态图来处理，网络上各种用样式写的加载动画也很多，而这里主要是记录一下GMaker用到的样式写的加载动画。

### 代码
```html
<template>
	<div>
		<g-loading-1 animate="scale" class="global-loading">
		</g-loading-1>
	</div>
</template>

<script>
import GLoading1 from '../components/loading1.vue'
export default {
	components: {
        GLoading1,
    },
}
</script>
```
查看 [组件源码](https://github.com/blueni/gmaker/blob/master/pkg/components/loading1.vue "组件源码地址")
