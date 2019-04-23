---
title: Layout 布局
---

# Layout 布局

### 基本布局
------

#### 预览
<ClientOnly>
<layout-demo-1></layout-demo-1>
</ClientOnly>

#### 代码
```html
<g-layout style="color: #3182bd;">
    <g-header style="background:#d3dce6;height:50px;">Header</g-header>
    <g-content style="background:#e5e9f2;height:100px;">Content</g-content>
    <g-footer style="background:#d3dce6;height:50px;">Footer</g-footer>
</g-layout>
```

### 侧边栏布局
------

#### 预览
<ClientOnly>
<layout-demo-2></layout-demo-2>
</ClientOnly>

#### 代码
```html
<g-layout>
    <g-sider style="background:#f5f9fa;width:200px;">Sider</g-sider>
        <g-layout style="color: #3182bd;">
            <g-header style="background:#d3dce6;height:50px">Header</g-header>
            <g-content style="background:#e5e9f2;height:100px;">Content</g-content>
        <g-footer style="background:#d3dce6;height:50px;">Footer</g-footer>
    </g-layout>
</g-layout>
```

### 侧边栏布局
------

#### 预览
<ClientOnly>
<layout-demo-3></layout-demo-3>
</ClientOnly>

#### 代码
```html
<g-layout style="color: #3182bd;">
   <g-header style="background:#d3dce6;height:50px;">Header</g-header>
   <g-layout>
       <g-sider style="background:#f5f9fa;width:200px;">Sider</g-sider>
       <g-content style="background:#e5e9f2;height:100px;">Content</g-content>
   </g-layout>
   <g-footer style="background:#d3dce6;height:50px;">Footer</g-footer>
</g-layout>
```