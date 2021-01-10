<template>
    <div class="company-data-header">
        <div class="name header-column">Company</div>
        <div class="since header-column">Since</div>
        <div class="owner header-column">Owner</div>
        <div class="status header-column">Status</div>
        <div class="action header-column">Actions</div>
    </div>
</template>

<script>
    export default {
        name: 'CompanyDataHeader',

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
        grid-template-columns: 220px 80px 160px 80px 110px;
        margin-bottom: 8px;
    }

    .filler {
        min-width: 100%;
    }
</style>