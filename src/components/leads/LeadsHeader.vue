<template>
    <!-- <div class="header">
        <div class="title">Leads <span class="title-company"> {{ companyName }}</span></div>
    </div> -->
    <div class="dashboard-header-container">
        <div class="header">
            <!-- title -->
            <div class="title">Leads: <span class="title-company"> {{ companyName }}</span></div>
            <DateFilter />
        </div>
    </div>
</template>

<script>
    import DateFilter from '../UI/DateFilter'
    export default {
        name: 'LeadsHeader',
        components: {DateFilter},
        props: {},
        data() {
            return {}
        },
        methods: {},
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
    /* .date-filter {
        display: grid;
        grid-template-columns: 33% auto 33%;
        padding-top: 8px;
        font-size: 0.65rem;
    } */

    .header {
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