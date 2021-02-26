<template>
    <div v-if="inDev" class="inDev">{{ $options.name }}</div>
    <section-header>Users: {{ companyName }} </section-header>
    <div class="layout">
        <form @submit.prevent="submitForm" class="users">
            <base-input _id="email" _label="Email" _type="email" v-model="user.email"></base-input>
            <base-input _id="first-name" _label="First name" v-model="user.first_name"></base-input>
            <base-input _id="last-name" _label="Last name" v-model="user.last_name"></base-input>
            <base-input _id="temp-password" _minlength="6" _label="Temporary password"  v-model="user.password" v-if="!user.id"></base-input>
            <base-checkbox _id="is-admin" :_styles="styles.admin" _label="User an Admin?" v-model="user.is_admin" _display="bk"></base-checkbox>
            <div class="submit-button">
                <base-button 
                    _mode="primary" 
                    :_styles="styles.submit" 
                    _type="submit">
                        <span v-if="!user.id">Add</span>
                        <span v-else>Update</span>
                 </base-button>
            </div>
        </form>
        <div class="existing-users">
            <the-existing-users 
                @edit-user="editUser"
                @delete-user="deleteUser"
                :_companyUsers="users">
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
                    type: 'Basic',
                    is_admin: false,
                    first_name: null,
                    last_name: null,
                    email: null,
                    password: null,
                    status: 'active'
                },
                styles: {
                    admin: {
                        textAlign: 'left',
                        fontSize: '.8rem'
                    },
                    submit: {
                        base: {
                            textAlign: 'left',
                            marginLeft: '8px',
                        },
                        button: {
                            borderRadius: '12px',
                            width: '82px',
                        }
                    }
                },
            }
        },

        methods: {
            editUser(userId) {
                this.user = this.$store.getters.getUserById(userId)
            },

            deleteUser(userId) {
                const payload = {userId, companyId: this.$route.params.id}
                this.$store.dispatch('delete_user', payload)
            },

            submitForm() {
                console.log('this.user', this.user);
                
                if( this.user.is_admin ) {
                    this.user.type = 'Admin'
                }
                // if we have a user.id, we must be in edit mode
                if (this.user.id) {
                    this.$store.dispatch('update_user', this.user)
                } else {
                // otherwise, we must be adding a user
                    this.$store.dispatch('add_user', this.user)
                }
                // reset the user in data
                this.user = {}
                this.user.company_id = this.$route.params.id
                this.user.is_admin = false
                this.user.type = 'Basic'
            }
        },

        computed: {
            companyName() {
                try {
                    return this.$store.getters.getCompanyById(this.$route.params.id).name
                } catch(err) {
                    return ''
                }
            },

            users() {
                return this.$store.state.users
            }
        },

        created() {
            this.$store.dispatch('initialize_users_for_company_id', this.$route.params.id)
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