<template>
    <div class="leads-line-item" >
        <div @click="$emit('lead-selected', _id)" class="column date">{{ date }}</div>
        <div @click="$emit('lead-selected', _id)" class="column type">{{ lead.type }}</div>
        <div @click="$emit('lead-selected', _id)" class="column contact">{{ lead.contact }}</div>
        <div @click="cycleDisputeStatus(_id)" :class="[disputeClass, 'column']">{{ lead.disputeStatus }}</div>
    </div>
</template>

<script>
    import { format } from 'date-fns'
    export default {
        name: 'LeadsLineItem',

        components: {},

        props: ['_id', '_date', '_type', '_contact', '_dispute_status', '_company_id'],

        data() {
            return {
                disputeCycleNumber: 0,
                lead: {
                    id: this.$props._id,
                    date: this.$props._date,
                    type: this.$props._type,
                    contact: this.$props._contact,
                    disputeStatus: this.$props._dispute_status,
                    companyId: this.$props._company_id,
                },
            }
        },

        methods: {
            cycleDisputeStatus(id) {
                const disputeStates = ['undisputed', 'disputed', 'resolved']
                let num = this.disputeCycleNumber + 1
                if (num >= disputeStates.length) {
                    num = 0
                }
                this.disputeCycleNumber = num

                this.lead.disputeStatus = disputeStates[this.disputeCycleNumber]
                
                this.$store.dispatch('set_disputed', {leadId:id, status:this.disputeStatus})
            },
        },

        computed: {
            date() {
                return format(this.$props._date, 'M.ee.y')
            },

            disputeStatus() {
                const disputeStates = ['undisputed', 'disputed', 'resolved']
                return disputeStates[this.disputeCycleNumber]
            },

            disputeClass() {
                let selectedClass= 'none'
                switch (this.lead.disputeStatus) {
                    case 'undisputed': selectedClass = 'none'
                    break

                    case 'disputed': selectedClass = 'red'
                    break

                    case 'resolved': selectedClass = 'green'
                }
                return selectedClass
            }

        }
    }
</script>

<style scoped>
    .column {
        text-align: left;
        margin-left: 4px;
    }
    
    .disputed {
        color: red;
    }

    .leads-line-item {
        display: grid;
        grid-template-columns: 90px 70px 210px 80px;
        font-size: 0.85rem;
        cursor: pointer;
    }

    .toggle {
        cursor: pointer;
    }

    /* dispute colors */
    .green {
        color: green;
    }

    .red {
        color: red;
    }

</style>