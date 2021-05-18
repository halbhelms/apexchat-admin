<template>
    <div v-if="inDev" class="inDev">{{ $options.name }}</div>
    <div class="companies">
        <LeadsHeader />
        <LeadsDataHeader />
        <div class="line-item-wrapper" v-if="activeLeads.length">
        <LeadsLineItem 
            @lead-selected="leadDrilldown"
            v-for="lead in activeLeads" 
            :key="lead.id" 
            :_id="lead.id" 
            :_company_id="lead.company_id" 
            :_chat_id="lead.chat_id"
            :_date="lead.generated_at"
            :_type="lead.lead_type"
            :_contact="lead.contact"
            :_city="lead.city"
            :_state="lead.state"
            :_status="lead.status"/>
        </div>
        <div class="no-results" v-else>
            No results found. Try a different date filter.
        </div>
        <LeadsPagination :_lessLeads="hasLessLeads" :_moreLeads="hasMoreLeads" />
        <Modal 
            @modal-off="noSelectedLead" 
            v-if="selectedLead" 
            :_selectedLead="selectedLead" 
            :_chat="$store.state.activeChat" />
    </div>
    <div>{{ $store.state.activeChat }}</div>

</template>

<script>
    import LeadsHeader from '../components/leads/LeadsHeader'
    import LeadsDataHeader from '../components/leads/LeadsDataHeader'
    import LeadsLineItem from '../components/leads/LeadsLineItem'
    import Modal from '../components/site/Modal'
    import LeadsPagination from '../components/leads/LeadsPagination'

    export default {
        name: 'Leads',

        components: { LeadsHeader, LeadsDataHeader, LeadsLineItem, Modal, LeadsPagination },

        props: [],

        data() {
            return {
                leads: [],
                selectedLeadId: null,
                selectedLead: null,
                chat: []
            }
        },

        methods: {
            leadDrilldown(leadId) {
                console.log('leadId', leadId)
                // clear out any existing from previous requests
                this.selectedLeadId = leadId
                // this.chatId = null;
                // get new lead and associated chat
                let selectedLead = this.$store.getters.getLeadById(leadId)
                console.log('selectedLead',selectedLead)
                
                if (selectedLead.chat_id) {
                    this.$store.dispatch('load_and_set_active_chat_by_id', selectedLead.chat_id)
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
                return this.$store.getters.getLeadsForDateFilter.leads
            },

            activeLeadsTotal() {
                return this.$store.getters.getLeadsForDateFilter.total
            },

            activeChat() {
                try {
                    return this.$store.state.activeChat.chat_messages
                } catch (err) {
                    return []
                }
            },

            totalLeads() {
                if (this.$store.state.leadsLoaded) {
                    return this.$store.getters.getLeadsForDateFilter.leads.total
                }
                return 0
            },

            hasLessLeads() {
                return this.$store.state.leadsOffset !== 0
            },

            leadsRetrieved() {
                return this.$store.state.leadsOffset + this.$store.getters.getLeadsForDateFilter.leads.length
            },

            hasMoreLeads() {
                let totalLeads = this.$store.getters.getLeadsForDateFilter.total
                return totalLeads > this.leadsRetrieved
            },

            selectedLeads() {
                if (this.$store.state.leadsLast60) {
                    return this.$store.state[this.$store.state.timeFrame]
                } else {
                    return []
                }
            },
        },

        created() {
            this.$store.dispatch('initialize_leads_for_company_id', this.$route.params.id)
        }
    }
</script>

<style scoped>
    .no-results {
        font-style: italic;
        font-weight: 600;
        margin-top: 16px;
    }
</style>