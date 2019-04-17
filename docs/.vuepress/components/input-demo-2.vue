<template>
    <div style="padding-top: 16px;">
        <h2>双向绑定</h2>
        <p>
        <strong>预览</strong>
        </p>
        <g-input v-model="message"></g-input>
        <button @click="message+=1">
            +
        </button>
        {{message}}
        <p>
        <strong>代码</strong>
        </p>
        <pre><code>{{content}}</code></pre>
    </div>
</template>


<style scoped>
* {box-sizing: border-box;}
h2{margin: 50px 0 30px;}
</style>

<script>
import GInput from '../../../src/input'

export default {
    components: {'g-input': GInput},
    data () {
        return {
        message: '1',
        content: `
            <g-input v-model="message"></g-input>
            <button @click="message+=1">
                +
            </button>
            {{message}}
        `.replace(/^ {12}/gm, '').trim()
        }   
    }
}
</script>