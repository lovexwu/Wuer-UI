module.exports = {
    base: '/gulu/',
    title: 'Gulu-UI',
    description: '一个好用的UI框架',
    themeConfig: {
        nav: [
            {text: '主页', link: '/'},
            {text: '欢迎 Star', link: 'https://github.com/lovexwu/gulu'},
            {text: 'Github', link: 'https://github.com/lovexwu/'}
        ],

        sidebar: [
            {
                title: '介绍',
                collapsable: false,
                children: ['/']
            },

            {
                title: '入门',
                collapsable: false,
                children: [
                    '/install/',
                    '/get-started/',]
            },

            {
                title: '组件',
                collapsable: false,
                children: [
                    '/components/button',
                    '/components/input',
                    '/components/tabs',
                    '/components/layout',
                    '/components/grid',
                    '/components/toast',
                    '/components/popover',
                    '/components/collapse'
                ]
            }
        ]
    }
}