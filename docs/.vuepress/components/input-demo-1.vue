<template>
    <div style="padding-top: 16px;">
        <h2>简单用法</h2>
        <p>
        <strong>预览</strong>
        </p>
        <g-input value="张三"></g-input>
        <g-input value="李四" disabled></g-input>
        <g-input value="王五" readonly error="姓名不能少于两个字"></g-input>

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
            selected: '1',
            content: `
                <g-input value="张三"></g-input>
                <g-input value="李四" disabled></g-input>
                <g-input value="王五" readonly></g-input>

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