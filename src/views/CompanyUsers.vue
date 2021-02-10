<template>
    <section-header>Users: {{ companyName }} </section-header>
    <div class="layout">
        <div class="users">
            <base-input _id="username" _label="User name" v-model="user.userName"></base-input>
            <base-input _id="first-name" _label="First name" v-model="user.firstName"></base-input>
            <base-input _id="last-name" _label="Last name" v-model="user.lastName"></base-input>
            <base-input _id="email" _label="Email" _type="email" v-model="user.email"></base-input>
            <base-input _id="phone" _label="Phone" _type="tel" v-model="user.phone"></base-input>
            <base-input _id="temp-password" _label="Temporary password"  v-model="user.tempPassword"></base-input>
            <base-checkbox _id="is-admin" _label="User an Admin?" v-model="user.isAdmin" _display="bk"></base-checkbox>
            <div class="submit-button">
                <base-button _mode="primary" _width="w-medium" _display="bk" @click="submitForm">Add User</base-button>
            </div>
        </div>
        <div class="existing-users">
            <the-existing-users :_companyUsers="companyUsers"></the-existing-users>
        </div>
    </div>
</template>

<script>
    import TheExistingUsers from '../components/users/TheExistingUsers'
    export default {
        name: 'CompanyUsers',

        components: {TheExistingUsers},

        props: [],

        data() {
            return {
                user: {
                    userName: null,
                    firstName: null,
                    lastName: null,
                    email: null,
                    tempPassword: null,
                    isAdmin: false,
                },
                companyUsers: [],
                companyName: null,
            }
        },

        methods: {},

        computed: {},

        created() {
            this.companyUsers = this.$store.getters.getUsersForCompany(this.$route.params.id)
            this.companyName = this.$store.getters.getCompanyNameById(this.$route.params.id)
        }
    }
</script>

<style scoped>

.submit-button {
    margin-left: 126px;
}

.base-checkbox {
    /* position: relative; */
    margin-left: -4px;
}

.layout {
    display: grid;
    grid-template-columns: 50% 50%;
    grid-gap: 12px;
}

.users {
    margin-left: 36px;
    margin-top: 20px;
    display: grid;
    grid-gap: 12px;
}
</style>