<template>
    <div>
        <h2>侧边栏布局</h2>
        <p>
            <strong>预览</strong>
        </p>
        <g-layout>
            <g-sider>Sider</g-sider>
            <g-layout>
                <g-header>Header</g-header>
                <g-content>Content</g-content>
                <g-footer>Footer</g-footer>
            </g-layout>
        </g-layout>
        <p>
            <strong>代码</strong>
        </p>
        <pre><code>{{content}}</code></pre>
    </div>
</template>

<style scoped>
* {box-sizing: border-box;}
h2{margin: 50px 0 30px;}
.layout{color: #3182bd;}
.sider{background:#f5f9fa;width:200px;}
.header{background:#d3dce6;height:50px;}
.g-content{background:#e5e9f2;height:100px;}
.footer{background:#d3dce6;height:50px;}
.header,.g-content,.footer,.sider{display:flex;justify-content: center;align-items: center;}
</style>

<script>
import Layout from '../../../src/layout'
import Header from '../../../src/header'
import Sider from  '../../../src/sider'
import Content from '../../../src/content'
import Footer from '../../../src/footer'

export default {
    components: {
        'g-layout': Layout,
        'g-header': Header,
        'g-content': Content,
        'g-sider': Sider,
        'g-footer': Footer
    },

    data(){
        return{
        content:`
            <g-layout>
                <g-sider>Sider</g-sider>
                <g-layout>
                    <g-header>Header</g-header>
                    <g-content>Content</g-content>
                    <g-footer>Footer</g-footer>
                </g-layout>
            </g-layout>
        `.replace(/^ {12}/gm,'').trim()
        }
    }
}
</script>


