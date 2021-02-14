<template>
<!-- time filter -->
    <div class="date-filter">
        <div class="filter">
            <input name="date-filter" type="radio" id="last-login" :checked="'Since login' === $store.state.dateFilter ? 'checked' : false" @change="setDateFilter('Since login')" />
            <label for="last-login" name="date-filter"> Since last login</label>
        </div>
        <div class="filter">
            <input name="date-filter" type="radio" id="last-30" :checked="'last30' === $store.state.dateFilter ? 'checked' : false" @change="setDateFilter('last30')" />
            <label for="last-30" name="date-filter"> Last 30 Days</label>
        </div>
        <div class="filter">
            <input name="date-filter" type="radio" id="last-60" :checked="'last60' === $store.state.dateFilter ? 'checked' : false" @change="setDateFilter('last60')" />
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
                this.$store.dispatch('set_date_filter', value)
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