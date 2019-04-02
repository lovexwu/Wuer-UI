import  Vue from 'vue'
import Button from './button'
import Icon from './icon'
import  ButtonGroup from './button-group'
import Input from './input'
import Col from './col'
import Row from './row'

Vue.component('g-button',Button)
Vue.component('g-icon',Icon)
Vue.component('g-button-group',ButtonGroup)
Vue.component('g-input',Input)
Vue.component('g-col',Col)
Vue.component('g-row',Row)

new Vue({
    el: '#app',
    data:{
        loading1: false,
        loading2: true,
        loading3: false,
        message: 'hello xwu'
    },
    created(){

    },
    methods:{
        inputChange(e){
            console.log(e)
        }
    }
})



