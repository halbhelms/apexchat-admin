<template>
    <div class="leads-data-header">
        <div class="column company-name">Company</div>
        <div class="column date">Date</div>
        <div class="column type">Type</div>
        <div class="column contact">Contact</div>
        <div class="column location">Location</div>
        <div class="column phone">Phone</div>
        <div class="column disputed">Disputed?</div>
    </div>
</template>

<script>
    export default {
        name: 'LeadsDataHeader',

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
    .column {
        border: 1px solid gray;
    }

    .leads-data-header {
        display: grid;
        grid-template-columns: 2fr 1.5fr 1fr 2fr 2.5fr 1.5fr 1fr;
    }
</style>