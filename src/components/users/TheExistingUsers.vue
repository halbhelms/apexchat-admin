<template>
    <h3>Existing Users</h3>
    <div class="the-existing-users">
        <company-user v-for="user in users" :key="user.id" :_id="user.id" :_firstName="user.first_name" :_lastName="user.last_name" :_isAdmin="user.is_admin"></company-user>
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
            }
        },

        methods: {},

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

    .the-existing-users {
        border: 1px solid silver;
        margin-right: 16px;
    }
</style>