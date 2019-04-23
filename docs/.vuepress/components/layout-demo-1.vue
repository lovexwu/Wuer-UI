<template>
    <div style="padding-top: 15px;">
        <g-layout style="color: #3182bd;">
            <g-header style="background:#d3dce6;height:50px;">Header</g-header>
            <g-content style="background:#e5e9f2;height:100px;">Content</g-content>
            <g-footer style="background:#d3dce6;height:50px;">Footer</g-footer>
        </g-layout>
    </div>
</template>


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
    }
}
</script>


