<template>
    <div class="companies">
        <LeadsHeader />
        <LeadsDataHeader />
        <LeadsLineItem 
            @lead-selected="leadDrilldown"
            v-for="lead in activeLeads" 
            :key="lead.id" 
            :_id="lead.id" 
            :_company_id="lead.company_id" 
            :_chatId="lead.chatId"
            :_date="lead.date"
            :_type="lead.type"
            :_contact="lead.contact"
            :_location="lead.location"
            :_status="lead.status"/>
        <LeadsPagination :_lessLeads="hasLessLeads" :_moreLeads="hasMoreLeads" />
        <Modal @modal-off="noSelectedLead" v-if="selectedLead" :_selectedLead="selectedLead" :_chat="chat" />
    </div>
</template>

<script>
    import LeadsHeader from '../components/leads/LeadsHeader'
    import LeadsDataHeader from '../components/leads/LeadsDataHeader'
    import LeadsLineItem from '../components/leads/LeadsLineItem'
    import Modal from '../components/site/Modal'
    import LeadsPagination from '../components/leads/LeadsPagination'

    export default {
        name: 'Companies',

        components: { LeadsHeader, LeadsDataHeader, LeadsLineItem, Modal, LeadsPagination },

        props: [],

        data() {
            return {
                leads: [],
                selectedLead: null,
                chat: []
            }
        },

        methods: {
            leadDrilldown(leadId) {
                // clear out any existing from previous requests
                this.selectedLead = null;
                this.chat = null;
                // get new lead and associated chat
                let selectedLead = this.$store.getters.getLeadById(leadId)
                    if (selectedLead.chat_id) {
                    let chat = this.$store.getters.getChatById(selectedLead.chat_id)
                    this.chat = chat
                }
                this.selectedLead = selectedLead
            },

            noSelectedLead() {
                this.selectedLead = null
                this.chat = null
            },
        },

        computed: {
            activeLeads(){
                return this.$store.getters.getLeadsForDateFilterForCompany(this.$route.params.id).leads
            },

            totalLeads() {
                return this.$store.getters.getLeadsForDateFilterForCompany(this.$route.params.id).total
            },

            hasLessLeads() {
                return this.$store.state.leadOffset !== 0
            },

            hasMoreLeads() {
                let totalLeads = this.$store.getters.getLeadsForDateFilterForCompany(this.$route.params.id).total
                let leadsRetrieved = this.$store.state.leadsOffset + this.$store.getters.getLeadsForDateFilterForCompany(this.$route.params.id).leads.length 
                return totalLeads > leadsRetrieved
            },
        },
    }
</script>

<style scoped>

</style>