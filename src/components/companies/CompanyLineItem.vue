<template>
    <div class="line-item">
        <!-- data columns -->
        <div class="name">{{ _name }}</div>
        <div class="since">{{ _since }}</div>
        <div class="owner">{{ _owner }}</div>
        <div class="status">
            <input type="checkbox" :checked="_active" onclick="return false"/> <label>Active</label>
        </div>
        <!-- edit button -->
        <div class="edit">
            <button @click="setCurrentCompany(_id)" class="edit"><img class="icon" src="./edit.jpg" width="12" />
                Edit
            </button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'CompanyLineItem',

        components: {},

        props: [ '_id', '_name', '_since', '_owner', '_active' ],

        data() {

            return {}
        },

        methods: {
            setCurrentCompany(id) {
                this.$store.dispatch('set_current_company', id)
            }
        },

        computed: {}
    }
</script>

<style scoped>
    .icon {
        /* padding-top: 4px; */
        padding-bottom: -4px;
    }

    .line-item {
        display: grid;
        grid-template-columns: 220px 80px 160px 80px 80px;
        text-align: left;
        margin-left: 20px;
    }
</style>