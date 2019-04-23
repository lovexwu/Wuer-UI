<template>
 <div style="padding-top: 15px;">
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

