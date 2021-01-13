<template>
    <!-- inclosing div -->
    <div @click="setCurrentCompany(_id)" :class="[ $store.state.currentCompany == _id ? 'highlighted-line-item' : 'normal-line-item' ]">
        <!-- data columns -->
        <div class="name">{{ _name }}</div>
        <div class="since">{{ _since }}</div>
        <div class="owner">{{ _owner }}</div>
        <div class="status">
            <input type="checkbox" :checked="_active" onclick="return false"/> <label>Active</label>
        </div>
        <!-- action buttons -->
        <div class="buttons">
            <!-- edit button-->
            <router-link :to="{name: 'CompanyEdit', params: {id: _id}}">
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
        background-size: 140%;
        cursor: pointer;
        margin: 0 2px 0 2px;
    }

    .action-button:hover {
        transition: all 0.5s ease;
        transform: scale(1.25) perspective(1px);
        color: white;
    }

        .edit {
            background-image: url('admin-edit.png');
        }

        .leads {
            background-size: 100%;
            background-image: url('admin-leads.png');
        }

        .videos {
            background-image: url('admin-videos.png');
        }

    .action-button-img{
        border: 2px solid navy;
        border-radius: 12px;
    }



   /* button.edit, button.lead, button.videos {
        margin-left: 8px;
        margin-top: 6px;
        border: 1px solid silver;
        border-radius: 18px;
        line-height: 1.5rem;
        width: 26px;
        height: 26px;
        padding-top: 3px;
        background-color: #008AE6;
        color:aliceblue;
        font-size: 0.8rem;
        line-height: 1rem;
        margin-top: -4px;
    } */

    /* button.lead svg {
        padding-right: 0px;
        width: 22px;
        margin-left: -5px;
    }

    button.videos svg {
        width: 22px;
        margin-left: -4px;
    }

    button.edit:hover {
        background-color: #2d83af; */
        /* filter: brightness(115%);
        transition: all 0.5s ease;
        transform: scale(1.05) perspective(1px);
        color: white;
    }

    button.edit:active, button.embed-code:focus {
        border-radius: 12px;
    } */

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

    .normal-line-item {
        display: grid;
        grid-template-columns: 220px 80px 160px 80px 140px;
        text-align: left;
        margin-left: 20px;
        font-size: 0.9rem;
        margin-bottom: 6px;
        cursor: pointer;
        padding-top: 2px;
        padding-bottom: 2px;        
    }

    svg {
        width: 18px;
        height: 18px;
        padding-right: 2px;
    }
</style>