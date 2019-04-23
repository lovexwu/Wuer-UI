---
title: Toast 提示框
---

# Toast 提示框
:::tip
需要设置css 样式，不然按钮显示不了
:::
```CSS
.toast-wrapper {z-index: 30 !important;}
```

### 设置出现位置
------

#### 预览
<ClientOnly>
<toast-demo-1></toast-demo-1>
</ClientOnly>

```html
<g-button @click="$toast('顶部弹出提示')">顶部弹出</g-button>
<g-button @click="$toast('中间弹出提示', {position:'middle'})">中间弹出</g-button>
<g-button @click="$toast('底部弹出提示', {position:'bottom'})">底部弹出</g-button>
```

### 设置关闭按钮（其中支持 HTML）
------

#### 预览
<ClientOnly>
<toast-demo-2></toast-demo-2>
</ClientOnly>

#### 代码
```html
<g-button @click="onClickButton">顶部弹出</g-button>
```

```js
methods: {
    onClickButton () {
        this.$toast('<strong style="color:red;">我是加粗的红色顶部弹出内容</strong>', {
            closeButton: {
                text: '关闭'
            },
            enableHtml: true
        })
    }
}
```