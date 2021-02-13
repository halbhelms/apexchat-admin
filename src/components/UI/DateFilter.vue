<template>
<!-- time filter -->
    <div class="date-filter">
        <div class="filter">
            <input name="date-filter" type="radio" id="last-login" @change="setDateFilter('lastLogin')" />
            <label for="last-login" name="date-filter"> Since last login</label>
        </div>
        <div class="filter">
            <input name="date-filter" type="radio" id="last-30" @change="setDateFilter('last30')" />
            <label for="last-30" name="date-filter"> Last 30 Days</label>
        </div>
        <div class="filter">
            <input name="date-filter" type="radio" id="last-60" @change="setDateFilter('last60')" />
            <label for="last-60" name="date-filter"> Last 60 days</label>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'DateFilter',

        components: {},

        props: [],

        data() {
            return {}
        },

        methods: {
            setDateFilter(value) {
                console.log("🚀 ~ file: DateFilter.vue ~ line 33 ~ setDateFilter ~ value", value)
            }
        },

        computed: {}
    }
</script>

<style scoped>
    .date-filter {
        display: grid;
        grid-template-columns: 33% auto 33%;
        padding-top: 8px;
        font-size: 0.65rem;
    }
</style>