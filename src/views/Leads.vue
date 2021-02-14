<template>
    <div class="companies">
        <LeadsHeader />
        <LeadsDataHeader />
        <LeadsLineItem 
            @lead-selected="leadDrilldown"
            v-for="lead in leads" 
            :key="lead.id" 
            :_id="lead.id" 
            :_company_id="lead.company_id" 
            :_chatId="lead.chatId"
            :_date="lead.date"
            :_type="lead.type"
            :_contact="lead.contact"
            :_status="lead.status"/>
        <Modal @modal-off="noSelectedLead" v-if="selectedLead" :_selectedLead="selectedLead" :_chat="chat" />
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

        computed: {},

        created() {
            this.leads = this.$store.getters.getLeadsForCompany(this.$route.params.id)
        }
    }
</script>

<style scoped>

</style>