<template>
    <div class="leads-line-item" >
        <div @click="$emit('lead-selected', _id)" class="column company-name">{{ name }}</div>
        <div @click="$emit('lead-selected', _id)" class="column date">{{ date }}</div>
        <div @click="$emit('lead-selected', _id)" class="column type">{{ _type }}</div>
        <div @click="$emit('lead-selected', _id)" class="column contact">{{ _contact }}</div>
        <div @click="$emit('lead-selected', _id)" class="column location">{{ _location }}</div>
        <div @click="$emit('lead-selected', _id)" class="column phone">{{ phone }}</div>
        <div @click="toggleDisputed(_id)" :class="[disputedStatus ? 'disputed' : '', 'column toggle']">{{ disputedStatus }}</div>
    </div>
</template>

<script>
    import { format } from 'date-fns'
    export default {
        name: 'LeadsLineItem',

        components: {},

        props: ['_id', '_name', '_date', '_type', '_contact', '_location', '_phone', '_disputed', '_companyId'],

        data() {
            return {}
        },

        methods: {
            toggleDisputed(id) {
                this.$store.dispatch('toggle_disputed', id)
            }
        },

        computed: {
            date() {
                return format(this.$props._date, 'M.ee.y')
            },

            disputed() {
                return this.$props._disputed ? 'Yes' : 'No'
            },

            disputedStatus() {
                return this.$store.getters.getDisputedStatusById(this.$props._id)
            },

            name() {
                return this.$store.getters.getCompanyById(this.$props._companyId).name
            },

            phone() {
                let p = this.$props._phone.toString()
                return `${p.substring(0,3)}.${p.substring(3,6)}.${p.substring(6,10)}`
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
        grid-template-columns: 2fr 1.5fr 1fr 2fr 2.5fr 1.5fr 1fr;
        font-size: 0.85rem;
        cursor: pointer;
    }

    .toggle {
        cursor: pointer;
    }

</style>