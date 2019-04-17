module.exports = {
    base: '/gulu/',
    title: '轱辘UI',
    description: '一个好用的UI框架',
    themeConfig: {
        sidebar: [
            {
                title: '入门',
                children: [
                    '/install/',
                    '/get-started/',]
            },

            {
                title: '组件',
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