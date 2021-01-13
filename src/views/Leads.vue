<template>
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
        <Modal />
    </div>
</template>

<script>
    import LeadsHeader from '../components/leads/LeadsHeader'
    import LeadsDataHeader from '../components/leads/LeadsDataHeader'
    import LeadsLineItem from '../components/leads/LeadsLineItem'
    import Modal from '../components/site/Modal'

    export default {
        name: 'Companies',

        components: { LeadsHeader, LeadsDataHeader, LeadsLineItem, Modal },

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