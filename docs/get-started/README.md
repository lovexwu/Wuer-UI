---
title: 快速上手
---

# 快速上手


## 添加 CSS样式 
```css
*,*::before,*::after{box-sizing: border-box;}
```
IE8 及 以上浏览器都支持此样式


## 引入 gulu

```javascript
import {Button} from 'gulu'
import Vue from 'vue'

new Vue({
  el: '#app',
  components: {
    'g-button':Button
  }
})
```
