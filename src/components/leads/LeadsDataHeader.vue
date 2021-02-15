<template>
    <div class="company-data-header">
        <div class="name header-column">Date</div>
        <div class="type header-column">Type</div>
        <div class="contact header-column">Contact</div>
        <div class="location header-column">Location</div>
        <div class="status header-column">Status</div>
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
    .company-data-header {
        font-weight:900;
        background-color: rgb(0,138,230);
        color:antiquewhite;
        display: grid;
        padding: 4px 0 4px 0;
        grid-template-columns: 90px 70px 210px 210px 80px;
        margin-bottom: 8px;
    }

    .header-column {
        text-align: left;
        margin-left: 24px;
    }

    .status {
        position: relative;
        left: -16px;
    }

    .type {
        position: relative;
        left: -20px;
    }
</style>