<template>
    {{ leads[1] }}
    <div class="companies">
        <LeadsHeader />
        <LeadsDataHeader />
        <LeadsLineItem 
            v-for="lead in leads" 
            :key="lead.id" 
            :_id="lead.id" 
            :_companyId="lead.companyId" 
            :_location="lead.location"
            :_chatId="lead.chatId"
            :_date="lead.date"
            :_type="lead.type"
            :_address="lead.address"
            :_phone="lead.phone"
            :_contact="lead.contact"
            :_disputed="lead.disputed"/>
    </div>
</template>

<script>
    import LeadsHeader from '../components/leads/LeadsHeader'
    import LeadsDataHeader from '../components/leads/LeadsDataHeader'
    import LeadsLineItem from '../components/leads/LeadsLineItem'

    export default {
        name: 'Companies',

        components: { LeadsHeader, LeadsDataHeader, LeadsLineItem },

        props: [],

        data() {
            return {
                leads: []
            }
        },

        methods: {},

        computed: {},

        created() {
            this.leads = this.$store.getters.getLeadsForCompany(this.$route.params.id)
        }
    }
</script>

<style scoped>

</style>