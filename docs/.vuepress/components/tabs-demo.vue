<template>
    <div style="padding-top: 15px;">
        <g-tabs :selected="selectedTab">
            <g-tabs-head>
                <g-tabs-item name="1">Tab1</g-tabs-item>
                <g-tabs-item name="2">Tab2</g-tabs-item>
                <g-tabs-item name="3">Tab3</g-tabs-item>
            </g-tabs-head>
            <g-tabs-body>
                <g-tabs-pane name="1">Tab1Content</g-tabs-pane>
                <g-tabs-pane name="2">Tab2Content</g-tabs-pane>
                <g-tabs-pane name="3">Tab3Content</g-tabs-pane>
            </g-tabs-body>
        </g-tabs>
    </div>
</template>

<script>
import Tabs from '../../../src/tabs'
import TabsHead from '../../../src/tabs-head'
import TabsItem from  '../../../src/tabs-item'
import TabsBody from '../../../src/tabs-body'
import TabsPane from '../../../src/tabs-pane'

export default {
    components: {
        "g-tabs": Tabs,
        "g-tabs-head": TabsHead,
        "g-tabs-body": TabsBody,
        "g-tabs-item": TabsItem,
        "g-tabs-pane": TabsPane
    },
    data(){
        return{
            selectedTab: '1'
        }
    }
}
</script>


