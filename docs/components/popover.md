---
title: Popover 弹出层
---

# Popover 弹出层

### Click 弹出
------

#### 预览
<ClientOnly>
<popover-demo-1></popover-demo-1>
</ClientOnly>

#### 代码
```html
<g-popover> 
    <template slot="content"><div>popover内容</div></template> 
    <g-button>上方弹出</g-button> 
</g-popover> 
<g-popover position="bottom"> 
    <template slot="content"><div>popover内容</div></template> 
    <g-button>下方弹出</g-button> 
</g-popover> 
<g-popover position="left"> 
    <template slot="content"><div>popover内容</div></template> 
    <g-button>左边弹出</g-button> 
</g-popover> 
<g-popover position="right"> 
    <template slot="content"><div>popover内容</div></template> 
    <g-button>右边弹出</g-button> 
</g-popover> 
```

### Hover 弹出
------

#### 预览
<ClientOnly>
<popover-demo-2></popover-demo-2>
</ClientOnly>

#### 代码
```html
<g-popover trigger="hover"> 
    <template slot="content"><div>popover内容</div></template> 
    <g-button>上方弹出</g-button> 
</g-popover> 
<g-popover position="bottom" trigger="hover"> 
    <template slot="content"><div>popover内容</div></template> 
    <g-button>下方弹出</g-button> 
</g-popover> 
<g-popover position="left" trigger="hover"> 
    <template slot="content"><div>popover内容</div></template> 
    <g-button>左边弹出</g-button> 
</g-popover> 
<g-popover position="right" trigger="hover"> 
    <template slot="content"><div>popover内容</div></template> 
    <g-button>右边弹出</g-button> 
</g-popover> 
```