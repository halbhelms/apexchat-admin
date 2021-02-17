<template>
    <div v-if="inDev" class="inDev">{{ $options.name }}</div>
    <img src="./button_left.png" alt="Prev" v-if="_lessLeads" @click="previousLeads"> <img src="./button_right.png" alt="Next" v-if="_moreLeads" @click="nextLeads">
</template>

<script>
    export default {
        name: 'LeadsPagination',

        components: {},

        props: ['_moreLeads', '_lessLeads'],

        data() {
            return {}
        },

        methods: {
            previousLeads() {
                this.$store.dispatch('previous_leads')
            },

            nextLeads() {
                this.$store.dispatch('next_leads')
            }
        },

        computed: {}
    }
</script>

<style scoped>
    img {
        width: 48px;
    }
</style>