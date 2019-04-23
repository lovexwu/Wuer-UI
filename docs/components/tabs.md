---
title: Tabs 标签
---

# Tabs 标签

#### 预览
<ClientOnly>
<tabs-demo></tabs-demo>
</ClientOnly>

#### 代码
```html
<g-tabs :selected="selectedTab">
    <g-tabs-head>
        <g-tabs-item name="1">Tab1</g-tabs-item>
        <g-tabs-item name="2">Tab2</g-tabs-item>
        <g-tabs-item name="3">Tab3</g-tabs-item>
    </g-tabs-head>
    <g-tabs-body>
       <g-tabs-pane name="1">Tab1Content</g-tabs-pane>
       <g-tabs-pane name="2">Tab2Content</g-tabs-pane>
       <g-tabs-pane name="3">Tab3Content</g-tabs-pane>
    </g-tabs-body>
</g-tabs>
```   

```js
data(){
   return{
       selectedTab: '1'
   }
} 
```