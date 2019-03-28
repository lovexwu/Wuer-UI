import  Vue from 'vue'
import Button from './button'
import Icon from './icon'
import  ButtonGroup from './button-group'


Vue.component('g-button',Button)
Vue.component('g-icon',Icon)
Vue.component('g-button-group',ButtonGroup)

new Vue({
    el: '#app',
    data:{
        loading1: false,
        loading2: true,
        loading3: false
    }
})

import chai from 'chai'
import spies from 'chai-spies'
chai.use(spies)

const expect = chai.expect

//单元测试
{
    const Constructor = Vue.extend(Button)//Button组件变成构造函数
    const vm = new Constructor({
        propsData:{
            icon: 'settings'
        }
    })//构造函数生成一个实例
    vm.$mount('#test')//实例挂载到id为test的 div上面
    let useElement = vm.$el.querySelector('use')
    let href = useElement.getAttribute('xlink:href')
    expect(href).to.eq('#i-settings')//期待 href 等于 i-settings

    vm.$el.remove()
    vm.$destroy()
}

{
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData:{
            icon: 'settings',
            loading: true
        }
    })
    vm.$mount()
    let useElement = vm.$el.querySelector('use')
    let href = useElement.getAttribute('xlink:href')
    expect(href).to.eq('#i-loading')//期待 href 等于 i-loading

    vm.$el.remove()
    vm.$destroy()
}


{//如果默认给一个settings ,把按钮挂载到页面中后，它的order是字符串1
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData:{
            icon: 'settings'
        }
    })
    //vm.$mount()//如果元素没挂载在页面上，也就是元素不在页面里面，页面就不渲染这个元素,
    vm.$mount(div)//div 元素挂载到页面
    let svg = vm.$el.querySelector('svg')
    let {order} = window.getComputedStyle(svg)
    expect(order).to.eq('1')//期待 order 等于 1

    vm.$el.remove()
    vm.$destroy()
}

{
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData:{
            icon: 'settings',
            iconPosition: 'right'
        }
    })

    vm.$mount(div)
    let svg = vm.$el.querySelector('svg')
    let {order} = window.getComputedStyle(svg)
    expect(order).to.eq('2')//期待 order 等于 1

    vm.$el.remove() // vm中的 button元素 从页面里删除
    vm.$destroy()// vm中的 button对象 从页面里删除
}

{//mock
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData:{
            icon: 'settings'
        }
    })

    vm.$mount()

    let spy = chai.spy(function(){})

    vm.$on('click',spy) //1、on click 触发 spy

    let button = vm.$el
    button.click()// 2、button点击后
    expect(spy).to.have.been.called() //3、期待 spy 已经被调用了
}