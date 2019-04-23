<template>
    <div style="padding-top: 15px;">
        <g-input value="张三"></g-input>
        <g-input value="李四" disabled></g-input>
        <g-input value="王五" readonly error="姓名不能少于两个字"></g-input>
    </div>
</template>

<script>
    import GInput from '../../../src/input'

    export default {
        components: {'g-input': GInput}
      }
</script>