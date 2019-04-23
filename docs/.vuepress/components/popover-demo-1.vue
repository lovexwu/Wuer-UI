<template>
 <div style="padding-top: 15px;">
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
 </div>
</template>

<script>
    import Popover from '../../../src/popover'
    import Button from '../../../src/button'

    export default {
     components: {
         'g-button': Button,
         'g-popover': Popover
     }
 }
</script>

