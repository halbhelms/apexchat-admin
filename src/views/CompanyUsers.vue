<template>
    <section-header>Users: {{ companyName }} </section-header>
    <div class="layout">
        <div class="users">
            <base-input _id="username" _label="User name" v-model="user.user_name"></base-input>
            <base-input _id="first-name" _label="First name" v-model="user.first_name"></base-input>
            <base-input _id="last-name" _label="Last name" v-model="user.last_name"></base-input>
            <base-input _id="email" _label="Email" _type="email" v-model="user.email"></base-input>
            <base-input _id="phone" _label="Phone" _type="tel" v-model="user.phone"></base-input>
            <base-input _id="temp-password" _label="Temporary password"  v-model="user.temp_password" v-if="!user.id"></base-input>
            <base-checkbox _id="is-admin" _label="User an Admin?" v-model="user.is_admin" _display="bk"></base-checkbox>
            <div class="submit-button">
                <base-button _mode="primary" _radius="r-full" _width="w-medium" _display="bk" @button-clicked="submitForm"><span v-if="!user.id">Add</span><span v-else>Update</span></base-button>
            </div>
        </div>
        <div class="existing-users">
            <the-existing-users 
                @edit-user="editUser"
                @delete-user="deleteUser"
                :_companyUsers="companyUsers">
            </the-existing-users>
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
                    id: null,
                    company_id: this.$route.params.id,
                    is_admin: false,
                    user_name: null,
                    first_name: null,
                    last_name: null,
                    email: null,
                    phone: null,
                },
                // companyUsers: [],
                companyName: null,
            }
        },

        methods: {
            editUser(userId) {
                this.user = this.$store.getters.getUserById(userId)
            },

            deleteUser(userId) {
                this.$store.dispatch('delete_company_user', userId)
            },

            submitForm() {
                if (this.user.id) {
                    this.$store.dispatch('update_user', this.user)
                } else {
                    this.$store.dispatch('add_user', this.user)
                }
                this.user = {}
                // this.company_id = this.$route.params.id
                this.user.company_id = this.$route.params.id
            }

        },

        computed: {
            companyUsers() {
                return this.$store.getters.getUsersForCompany(this.$route.params.id)
            }
        },

        created() {
            
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