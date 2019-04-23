<template>
    <button class="g-button wuer9" :class = "{[`icon-${iconPosition}`]:true}" @click="$emit('click')">
        <g-icon :name="icon" v-if="icon && !loading" class="icon"></g-icon>
        <g-icon name="loading" v-if="loading" class="loading icon"></g-icon>
        <div class="g-content">
            <slot></slot>
        </div>
    </button>
</template>

<script>
    import Icon from './icon'
    export default {
        name:'GuluButton',
        components:{
            'g-icon': Icon
        },
        //props: ['icon', 'iconPosition']
        props:{
            icon:{},
            loading:{
                type: Boolean,
                default: false
            },
            iconPosition:{
                type: String,
                default: 'left',
                validator (value){ // 属性的检查器
                    return value === 'left' || value === 'right';
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    $font-size: 14px;
    $button-height: 32px;
    $button-bg: white;
    $border-radius: 4px;
    $color: #333;
    $border-color: #999;
    $border-color-hover: #666;
    $button-active-bg: #eee;

    .g-button{
        font-size: $font-size;
        height: $button-height;
        padding: 0 1em;
        border-radius: $border-radius;
        border: 1px solid $border-color;
        background: $button-bg;
        display:inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align: middle;

        &:hover{
            border-color: $border-color-hover;
        }
        &:active{
            background-color: $button-active-bg;
        }
        &:focus{outline: none;}
        > .g-button-content{order: 2;}
        > .icon{order: 1;margin-right: .1em;}

        &.icon-right{
            > .g-button-content{order: 1;}
            > .icon{order: 2;margin-right: 0; margin-left: .1em;}
        }
    }
    @keyframes spin {
       0%{transform: rotate(0deg)}
        100%{transform: rotate(360deg)}
    }
    .loading{
        animation: spin 2s infinite linear;
    }
</style>

