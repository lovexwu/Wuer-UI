<template>
    <div style="padding-top: 16px;">
        <h2>this.$toast</h2>
        <p>
            <strong>预览</strong>
        </p>

        <div>
            <g-button @click="$toast('顶部弹出提示')">顶部弹出</g-button>
            <g-button @click="$toast('中间弹出提示', {position:'middle'})">中间弹出</g-button>
            <g-button @click="$toast('底部弹出提示', {position:'bottom'})">底部弹出</g-button>
        </div>

        <p>
            <strong>代码</strong>
        </p>
        <pre><code>{{content}}</code></pre>
    </div>
</template>

<style>
    .toast-wrapper {
        z-index: 30 !important;
    }
</style>
<style scoped>
    * {
        box-sizing: border-box;
    }
</style>

<script>
    import plugin from '../../../src/plugin'
    import GButton from '../../../src/button'
    import Vue from 'vue'
    Vue.use(plugin)

    export default {
        components: {'g-button': GButton},
        data () {
           return {
           content: `
                <style>
                .toast-wrapper {
                  z-index: 30;
                }
                </style>
                <g-button @click="$toast('顶部弹出提示')">顶部弹出</g-button>
                <g-button @click="$toast('中间弹出提示', {position:'middle'})">中间弹出</g-button>
                <g-button @click="$toast('底部弹出提示', {position:'bottom'})">底部弹出</g-button>
           `.replace(/^ {12}/gm, '').trim()
           }
        }
    }
</script>