<template>
    <div style="padding-top: 15px;">
        <div>
            <g-button @click="$toast('顶部弹出提示')">顶部弹出</g-button>
            <g-button @click="$toast('中间弹出提示', {position:'middle'})">中间弹出</g-button>
            <g-button @click="$toast('底部弹出提示', {position:'bottom'})">底部弹出</g-button>
        </div>
    </div>
</template>

<style>
    .toast-wrapper {z-index: 30 !important;}
</style>

<script>
    import plugin from '../../../src/plugin'
    import GButton from '../../../src/button'
    import Vue from 'vue'
    Vue.use(plugin)

    export default {
        components: {'g-button': GButton}
    }
</script>