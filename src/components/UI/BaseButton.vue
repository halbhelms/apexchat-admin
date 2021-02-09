<template>
    <div class="base-button">
        <button @click="this.$emit('button-clicked')">
            <slot></slot>
        </button>
    </div>
</template>

<script>
    export default {
        name: 'BaseButton',

        components: {},

        props: ['_role'],

        emits: ['button-clicked'],

        data() {
            return {}
        },

        methods: {},

        computed: {}
    }
</script>

<style scoped>

</style>