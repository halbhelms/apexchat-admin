<template>
    <h3>Existing Users</h3>
    <div class="the-existing-users">
        <company-user class="pointer" v-for="user in users" :key="user.id" :_id="user.id" :_firstName="user.first_name" :_lastName="user.last_name" :_isAdmin="user.is_admin" @edit-user="userToEdit"></company-user>
    </div>
</template>

<script>
    import CompanyUser from '../users/CompanyUser'
    export default {
        name: 'TheExistingUsers',

        components: {CompanyUser},

        props: [],

        data() {
            return {
                users: [],
                editUser: null,
            }
        },

        methods: {
            userToEdit(userId) {
                console.log('userId', userId);
                
                // get user
            }
        },

        computed: {},

        created() {
            this.users = this.$store.state.companyUsers
        }
    }
</script>

<style scoped>
    * {
        margin: 0;
    }
    
    .pointer {
        cursor: pointer;
    }

    h3 {
        text-align: left;
        margin: 12px 0 12px 28px;

    }

    .the-existing-users {
        /* border: 1px solid silver; */
        margin-right: 16px;
    }
</style>