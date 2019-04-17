<template>
  <div> 
   <h2>hover弹出</h2>
   <p> <strong>预览</strong> </p> 
   <g-popover trigger="hover"> 
    <template slot="content"> 
     <div>popover内容</div> 
    </template> 
    <g-button>Top</g-button> 
   </g-popover> 
   <g-popover position="bottom" trigger="hover"> 
    <template slot="content"> 
     <div>popover内容</div> 
    </template> 
    <g-button>Bottom</g-button> 
   </g-popover> 
   <g-popover position="left" trigger="hover">
    <template slot="content"> 
     <div>popover内容</div> 
    </template> 
    <g-button>Left</g-button> 
   </g-popover> 
   <g-popover position="right" trigger="hover">
    <template slot="content"> 
     <div>popover内容</div> 
    </template> 
    <g-button>Right</g-button> 
   </g-popover> 
   <p> <strong>代码</strong> </p> 
   <pre><code>{{content}}</code></pre> 
  </div>
</template>

<style scoped>
    * {box-sizing: border-box;}
    h2{margin: 50px 0 30px;}
</style>

<script>
    import Popover from '../../../src/popover'
 import Button from '../../../src/button'

    export default {
     components: {
         'g-button': Button,
         'g-popover': Popover
     },
     data(){
         return{
         content:`
             <g-popover trigger="hover">
                 <template slot="content">
                     <div>popover内容</div>
                 </template>
                 <g-button>Top</g-button>
             </g-popover>

             <g-popover position="bottom" trigger="hover">
                 <template slot="content">
                     <div>popover内容</div>
                 </template>
                 <g-button>Bottom</g-button>
             </g-popover>

             <g-popover position="left" trigger="hover">
                 <template slot="content">
                     <div>popover内容</div>
                 </template>
                 <g-button>Left</g-button>
             </g-popover>

             <g-popover position="right" trigger="hover">
                 <template slot="content">
                     <div>popover内容</div>
                 </template>
                 <g-button>Right</g-button>
             </g-popover>

         `.replace(/^ {12}/gm, '').trim()
         }
   }
 }
</script>

