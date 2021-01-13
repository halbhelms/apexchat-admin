<template>
    <div class="modal">
   </div>
</template>

<script>
    export default {
        name: 'Modal',

        components: {},

        props: [],

        data() {

            return {}
        },

        methods: {},

        computed: {}
    }
</script>

<style scoped>
    .modal {
        position: absolute;
        left: 160px;
        top: 120px;
        background-color: lightgrey;
        width: 78%;
        height: 440px;
        margin-left: 4%;
        margin-right: 4%;
        border: 2px solid navy;
        border-radius: 12px;
    }
</style>