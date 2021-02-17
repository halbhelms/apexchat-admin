<template>
    <div v-if="inDev" class="inDev">{{ $options.name }}</div>
    <div class="companies">
        <CompaniesHeader />
        <CompanyDataHeader />
        <CompanyLineItem 
            v-for="company in $store.state.companies" 
            :key="company.id" 
            :_name="company.name" 
            :_since="company.since" 
            :_owner="company.owner" 
            :_active="company.status === 'active'" 
            :_id="company.id" />
    </div>
</template>

<script>
    import CompaniesHeader from '../components/companies/CompaniesHeader'
    import CompanyDataHeader from '../components/companies/CompanyDataHeader'
    import CompanyLineItem from '../components/companies/CompanyLineItem'

    export default {
        name: 'Companies',

        components: { CompaniesHeader, CompanyDataHeader, CompanyLineItem },

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