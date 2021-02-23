<template>
    <div v-if="inDev" class="inDev">{{ $options.name }}</div>
    <div class="leads-line-item" >
        <div @click="$emit('lead-selected', _id)" class="column date">{{ date }}</div>
        <div @click="$emit('lead-selected', _id)" class="column type">{{ type }}</div>
        <div @click="$emit('lead-selected', _id)" class="column contact">{{ _contact }}</div>
        <div @click="$emit('lead-selected', _id)" class="column location">{{ _city }} {{ _state }}</div>
        <div @click="cycleDisputeStatus(_id)" :class="[disputeClass, 'column', 'dispute-status']">{{ lead.status }}</div>
    </div>
</template>

<script>
    import { format } from 'date-fns'
    export default {
        name: 'LeadsLineItem',

        components: {},

        emits: ['lead_selected'],

        props: ['_id', '_date', '_type', '_contact', '_status', '_company_id','_location', '_chat_id'],

        data() {
            return {
                disputeCycleNumber: 0,
                lead: {
                    id: this.$props._id,
                    date: this.$props._date,
                    type: this.$props._type,
                    contact: this.$props._contact,
                    status: this.$props._status,
                    company_id: this.$props._company_id,
                    location: this.$props._location
                },
                disputeStates: ['active', 'disputed', 'resolved']
            }
        },

        methods: {
            cycleDisputeStatus(id) {
                let num = this.disputeCycleNumber + 1
                if (num >= this.disputeStates.length) {
                    num = 0
                }
                this.disputeCycleNumber = num
                this.lead.status = this.disputeStates[this.disputeCycleNumber]
                this.$store.dispatch('set_disputed', {leadId:id, status:this.status})
            },
        },

        computed: {
            date() {
                try {
                    return format(new Date(this.$props._date), 'MM.dd.y')
                    // return format('2021-01-10T18:24:10.000Z', 'MM.dd.y')
                } catch {
                    return ''
                }
            },

            type(){
                if (this.$props._type == "sales") {
                    return "Sales"
                } else {
                    return "Service"
                }
            },

            disputeStatus() {
                return this.disputeStates[this.disputeCycleNumber]
            },

            disputeClass() {
                let selectedClass= 'none'
                switch (this.lead.status) {
                    case 'active': selectedClass = 'none'
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
        border-bottom: 1px solid #f2f3f5;
    }

    .leads-line-item {
        display: grid;
        grid-template-columns: 90px 70px 210px 210px 80px;
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