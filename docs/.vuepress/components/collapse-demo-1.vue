<template>
    <div style="padding-top: 16px;">
        <h2>打开一个tab</h2>
        <p>
            <strong>预览</strong>
        </p>

        <g-collapse :selected.sync="selectedTab" single>
            <g-collapse-item title="标题1" name="1">内容1</g-collapse-item>
            <g-collapse-item title="标题2" name="2">内容2</g-collapse-item>
            <g-collapse-item title="标题3" name="3">内容3</g-collapse-item>
        </g-collapse>
        <p>选中的有：{{selectedTab}}</p>

        <p>
            <strong>代码</strong>
        </p>
        <pre><code>{{content}}</code></pre>

    </div>
</template>

<style  scoped>
    *{
        box-sizing: border-box;
    }
</style>


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
        selectedTab: ['1'],
        content:`
            <g-collapse :selected.sync="selectedTab" single>
                <g-collapse-item title="标题1" name="1">内容1</g-collapse-item>
                <g-collapse-item title="标题2" name="2">内容2</g-collapse-item>
                <g-collapse-item title="标题3" name="3">内容3</g-collapse-item>
            </g-collapse>
        `.replace(/^ {12}/gm,'').trim()
        }
    }
}
</script>

