<template>
    <div v-if="inDev" class="inDev">{{ $options.name }}</div>
    <button @click="show = !show">Show</button>
</template>

<script>
    export default {
        name: 'Temp',

        components: {},

        props:[], 
                
        data() {
            return {
                user: {
                    firstName: null,
                    lastName: null,
                    isAdmin: false,
                },
                show: false
                
            } 
        },

        methods: {
            sayHello() {
                console.log('Hello')
            },
            sayGoodbye() {
                console.log('Goodbye')
            },
        },

        computed: {}
    }
</script>

<style scoped>
.submit-button {
    margin-left: 154px;
}

    .fade-enter {
        opacity: 0;
    }

    .fade-enter-active {
        transition: opacity 5s ease-out;
    }
</style>