<template>
    <!-- inclosing div -->
        <div class="normal-line-item">
        <!-- data columns -->
        <div class="name">{{ _name }}</div>
        <div class="since">{{ _since }}</div>
        <div class="owner">{{ _owner }}</div>
        <div class="status">
            <img v-if="_active" src="./admin-active-status.png" width="24"/>
            <img v-if="!_active" src="./admin-inactive-status.png" width="24"/>
        </div>
        <!-- action buttons -->
        <div class="buttons">
            <!-- edit button-->
            <router-link :to="{name: 'EditCompany', params: {id: _id}}">
                <button class="action-button edit"></button>
            </router-link>
            <!-- leads button             -->
            <router-link :to="{name: 'CompanyLeads', params: {id: _id}}">
                <button class="action-button leads"></button>
            </router-link>
            <!-- videos button -->
            <router-link :to="{name: 'CompanyVideos', params: {id: _id}}">
                <button class="action-button videos"></button>
            </router-link>
            <!-- users button -->
            <router-link :to="{name: 'CompanyUsers', params: {id: _id}}">
                <button class="action-button users"></button>
            </router-link>
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
    .action-button {
        border: 2px solid #008AE6;
        width: 24px;
        height: 24px;
        border-radius: 12px;
        background-color: white;
        background-position: center;
        cursor: pointer;
        margin: 0 2px 0 2px;
    }

    .action-button:hover {
        transition: all 0.3s ease;
        transform: scale(1.25) perspective(1px);
    }

        .edit {
            background-image: url('admin-edit.png');
            background-size: 180%;
        }

        .leads {
            background-size: 120%;
            background-image: url('admin-leads.png');
        }

        .videos {
            background-image: url('admin-videos.png');
            background-size: 140%;
        }

        .users {
            background-image: url('admin-users.png');
            background-size: 140%;
        }

    .action-button-img{
        border: 2px solid navy;
        border-radius: 12px;
    }

    .active-status {
        background-color: #0066CC; 
        background-image: url('admin-active.png');
        background-position: center;
        width: 36px;
        height: 18px;
        border: 1px solid silver;
        border-radius: 10px;
        background-size: 86%;
    }

    .highlighted-line-item {
        display: grid;
        grid-template-columns: 220px 80px 160px 80px 140px;
        text-align: left;
        margin-left: 20px;
        font-size: 0.9rem;
        margin-bottom: 6px;
        cursor: pointer;
        background-color: #008AE6;
        filter: brightness(125%);
        color: white;
        padding-top: 2px;
        padding-bottom: 2px;
    }

    .highlighted-line-item .action-button {
        border: 2px solid lightseagreen;
    }

    .normal-line-item {
        display: grid;
        grid-template-columns: 220px 80px 160px 80px 140px;
        text-align: left;
        margin-left: 20px;
        font-size: 0.9rem;
        margin-bottom: 6px;
        /* cursor: pointer; */
        padding-top: 2px;
        padding-bottom: 2px;        
    }
</style>