<template>
    <div style="padding-top: 15px;">
        <g-input v-model="value"></g-input>
        <button @click="value+=1">
            +
        </button>
        {{value}}
    </div>
</template>

<script>
import GInput from '../../../src/input'

export default {
    components: {'g-input': GInput},
    data () {
        return {
            value: '1'
        }   
    }
}
</script>