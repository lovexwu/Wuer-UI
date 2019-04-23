<template>
    <div style="padding-top: 15px;">
        <g-button>默认按钮</g-button>
        <g-button icon="settings">设置</g-button>
        <g-button :loading="true">Loading</g-button>
        <g-button disabled>禁用</g-button>
    </div>
</template>

<script>
    import Button from '../../../src/button'

    export default {
        components:{
            'g-button': Button
        }
    }
</script>



