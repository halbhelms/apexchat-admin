<template>
    <div class="companies">
        <CompaniesHeader />
        <CompanyDataHeader />
    </div>
</template>

<script>
    import CompaniesHeader from '../components/companies/CompaniesHeader'
    import CompanyDataHeader from '../components/companies/CompanyDataHeader'

    export default {
        name: 'Companies',

        components: { CompaniesHeader, CompanyDataHeader },

        props: [],

        data() {

            return {}
        },

        methods: {},

        computed: {}
    }
</script>

<style scoped>

</style>