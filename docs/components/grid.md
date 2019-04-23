---
title: Grid 网格
---

# Grid 网格

### 24格网格


::: tip
页面需设置 CSS样式
:::

```css
*{box-sizing: border-box;}
```
------

#### 预览
<ClientOnly>
<grid-demo-1></grid-demo-1>
</ClientOnly>

#### 代码
```html
<g-row class="demoRow">
    <g-col span="12"><div class="demoCol">12</div></g-col>
    <g-col span="12"><div class="demoCol">12</div></g-col>
</g-row>
<g-row class="demoRow">
    <g-col span="8"><div class="demoCol">8</div></g-col>
    <g-col span="8"><div class="demoCol">8</div></g-col>
    <g-col span="8"><div class="demoCol">8</div></g-col>
</g-row>
<g-row class="demoRow">
    <g-col span="6"><div class="demoCol">6</div></g-col>
    <g-col span="6"><div class="demoCol">6</div></g-col>
    <g-col span="6"><div class="demoCol">6</div></g-col>
    <g-col span="6"><div class="demoCol">6</div></g-col>
</g-row>
```

### 设置 gutter
------

#### 预览
<ClientOnly>
<grid-demo-2></grid-demo-2>
</ClientOnly>

#### 代码
```html
<g-row class="demoRow" gutter="10">
    <g-col span="8"><div class="demoCol">8</div></g-col>
    <g-col span="8"><div class="demoCol">8</div></g-col>
    <g-col span="8"><div class="demoCol">8</div></g-col>
</g-row>
<g-row class="demoRow" gutter="10">
    <g-col span="6"><div class="demoCol">6</div></g-col>
    <g-col span="6"><div class="demoCol">6</div></g-col>
    <g-col span="6"><div class="demoCol">6</div></g-col>
    <g-col span="6"><div class="demoCol">6</div></g-col>
</g-row>
```

### 设置空隙
------

#### 预览
<ClientOnly>
<grid-demo-3></grid-demo-3>
</ClientOnly>

#### 代码
```html
<g-row class="demoRow" gutter="10">
    <g-col span="8"><div class="demoCol">8</div></g-col>
    <g-col span="2" offset="4"><div class="demoCol">8</div></g-col>
    <g-col span="8" offset="2"><div class="demoCol">8</div></g-col>
</g-row>
<g-row class="demoRow" gutter="10">
    <g-col span="4" offset="2"><div class="demoCol">6</div></g-col>
    <g-col span="6"><div class="demoCol">6</div></g-col>
    <g-col span="6"><div class="demoCol">6</div></g-col>
    <g-col span="6"><div class="demoCol">6</div></g-col>
</g-row>
<g-row class="demoRow" gutter="10">
    <g-col span="12"><div class="demoCol">12</div></g-col>
    <g-col span="9" offset="3"><div class="demoCol">12</div></g-col>
</g-row>
```