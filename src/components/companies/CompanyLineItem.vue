<template>
    <div class="line-item">
        <!-- data columns -->
        <div class="name">{{ _name }}</div>
        <div class="since">{{ _since }}</div>
        <div class="owner">{{ _owner }}</div>
        <div class="status">
            <input type="checkbox" :checked="_active" />
        </div>
        <!-- edit button -->
        <div class="edit">
            <button @click="selectCompany(_id)" class="edit"><img src="./edit.png" width="16" />
                Edit
            </button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'CompanyLineItem',

        components: {},

        props: [ _id, '_name', '_since', '_owner', '_active' ],

        data() {

            return {}
        },

        methods: {
            selectCompany(id) {
                
            }
        },

        computed: {}
    }
</script>

<style scoped>

</style>