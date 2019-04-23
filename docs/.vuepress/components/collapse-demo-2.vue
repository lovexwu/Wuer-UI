<template>
    <div style="padding-top: 15px;">
        <g-collapse :selected.sync="selectedTab">
            <g-collapse-item title="标题1" name="1">内容1</g-collapse-item>
            <g-collapse-item title="标题2" name="2">内容2</g-collapse-item>
            <g-collapse-item title="标题3" name="3">内容3</g-collapse-item>
        </g-collapse>
        <p>选中的有：{{selectedTab}}</p>
    </div>
</template>

<script>
    import Collapse from '../../../src/collapse'
    import CollapseItem from '../../../src/collapse-item'

    export default {
        components: {
            'g-collapse': Collapse,
            'g-collapse-item': CollapseItem
        },
        data () {
            return {
            selectedTab: ['1']
            }
        }
    }
</script>

