---
title: Collpase 手风琴
---

# Collpase 手风琴

### 单个Tab（其中设置参数 single）
------
每次只能展开一个面板

#### 预览
<ClientOnly>
<collapse-demo-1></collapse-demo-1>
</ClientOnly>

#### 代码
```html
<g-collapse :selected.sync="selectedTab" single>
   <g-collapse-item title="标题1" name="1">内容1</g-collapse-item>
   <g-collapse-item title="标题2" name="2">内容2</g-collapse-item>
   <g-collapse-item title="标题3" name="3">内容3</g-collapse-item>
</g-collapse>
```
``` js
data(){
    return {
        selectedTab: ['1']
    }
}
```

### 多个Tab
------
可同时展开多个面板，面板之间不影响

#### 预览
<ClientOnly>
<collapse-demo-2></collapse-demo-2>
</ClientOnly>

#### 代码
```html
<g-collapse :selected.sync="selectedTab">
   <g-collapse-item title="标题1" name="1">内容1</g-collapse-item>
   <g-collapse-item title="标题2" name="2">内容2</g-collapse-item>
   <g-collapse-item title="标题3" name="3">内容3</g-collapse-item>
</g-collapse>
```
``` js
data() {
    return {
        selectedTab: ['1']
    }
}
```
