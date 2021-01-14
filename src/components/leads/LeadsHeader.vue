<template>
    <!-- <div class="header">
        <div class="title">Leads <span class="title-company"> {{ companyName }}</span></div>
    </div> -->
    <div class="dashboard-header-container">
        <div class="header">
            <!-- title -->
            <div class="title">Leads <span class="title-company"> {{ companyName }}</span></div>
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
        </div>
    </div>
</template>

<script>
    export default {
        name: 'LeadsHeader',
        components: {},
        props: {},
        data() {
            return {}
        },
        methods: {
            setDateFilter(filter) {
                console.log('filter', filter);
            }
        },
        computed: {
            companyName() {
                if (this.$route.params.id) {
                    return 'for ' + this.$store.getters.getCompanyById(this.$route.params.id).name} else {
                        return ''
                    }
            }
        }
    }
</script>

<style scoped>
    .date-filter {
           display: grid;
        grid-template-columns: 50% auto;
        padding-top: 8px;
        font-size: 0.65rem;
    }

    .header {
        /* box-shadow: 0 0 6px 0 silver;
        background-color: rgb(237,240,245); */
        /* width: 780px; */
        display: grid;
        grid-template-columns: 472px 308px;
        text-align: left;
        border: 1px solid silver;
    }

    .title {
        font-size: 1.5rem;
        font-weight: bold;
        text-align: left;
        padding-left: 20px;
    }
</style>