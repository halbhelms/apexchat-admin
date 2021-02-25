<template>
    <div v-if="inDev" class="inDev">{{ $options.name }}</div>
    <h3>Existing Users</h3>
    <div class="the-existing-users">
        <company-user 
            v-for="user in users" 
            :key="user.id" 
            :_userId="user.id" 
            :_firstName="user.first_name" 
            :_lastName="user.last_name" 
            :_isAdmin="user.is_admin" 
            @delete-user="(userId) => $emit('delete-user', userId)"
            @edit-user="(userId) => $emit('edit-user', userId)">
        </company-user>
    </div>
</template>

<script>
    import CompanyUser from '../users/CompanyUser'
    export default {
        name: 'TheExistingUsers',

        components: {CompanyUser},

        props: {
            _companyUsers: {
                type: Array,
                required: false
            }
        },

        emits: {
            'edit-user': (userId) => {
                if (userId) { return true}
                return false;
            }
        },

        methods: {},

        computed: {
            users() {
                return this.$store.state.users
            }
        },

        created() {
            // this.users = this.$store.state.companyUsers
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