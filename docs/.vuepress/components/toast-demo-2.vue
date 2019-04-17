<template>
    <div style="padding-top: 16px;">
        <h2>带关闭按钮</h2>
        <p>
            <strong>预览</strong>
        </p>

        <div>
            <g-button @click="onClickButton">顶部弹出</g-button>
        </div>

        <p>
            <strong>代码</strong>
        </p>
        <pre><code>{{content}}</code></pre>
    </div>
</template>

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
                 <div>
                    <g-button @click="onClickButton">顶部弹出</g-button>
                 </div>
                methods: {
                    onClickButton () {
                        this.$toast('顶部弹出内容', {
                            closeButton: {
                                text: '关闭'
                            },
                            enableHtml: true
                        })
                    }
                }
            `.replace(/^ {12}/gm, '').trim()
                }
            },
        methods: {
            onClickButton () {
                this.$toast('顶部弹出内容', {
                    closeButton: {
                        text: '关闭'
                    },
                    enableHtml: true
                })
            }
        }
    }
</script>