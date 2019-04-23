---
title: Input 输入框
---

# Input 输入框


### 简单用法
------

#### 预览
<ClientOnly>
<input-demo-1></input-demo-1>
</ClientOnly>

#### 代码
```html
<g-input value="张三"></g-input>
<g-input value="李四" disabled></g-input>
<g-input value="王五" readonly></g-input>
```


### 双向绑定
------

#### 预览
<ClientOnly>
<input-demo-2></input-demo-2>
</ClientOnly>

#### 代码
```html
<g-input v-model="value"></g-input>
<button @click="value+=1">
   +
</button>
{{value}}
```
```js
data () {
    return {
        value: '1'
    }   
}
```