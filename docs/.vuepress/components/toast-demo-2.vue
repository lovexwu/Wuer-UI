<template>
    <div style="padding-top: 15px;">
        <div>
            <g-button @click="onClickButton">顶部弹出</g-button>
        </div>
    </div>
</template>

<script>
    import plugin from '../../../src/plugin'
    import GButton from '../../../src/button'
    import Vue from 'vue'
    Vue.use(plugin)

    export default {
        components: {'g-button': GButton},
        methods: {
            onClickButton () {
                this.$toast('<strong style="color:red;">我是加粗的红色顶部弹出内容</strong>', {
                    closeButton: {
                        text: '关闭'
                    },
                    enableHtml: true
                })
            }
        }
    }
</script>