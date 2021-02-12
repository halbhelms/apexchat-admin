<template>
<div class="edit">
    <!-- title -->
    <AddHeader/>
    <div class="columns-2">
    <!-- add form  -->
    <CompanyInfoForm />
    <!-- users -->
    <UserInputForm :_users=[] />    
    </div>
</div>

</template>

<script>
    import AddHeader from '../components/add/AddHeader'
    import CompanyInfoForm from '../components/companies/CompanyInfoForm'
    import UserInputForm from '../components/companies/UserInputForm'
    export default {
        name: 'AddCompany',

        components: {AddHeader, CompanyInfoForm, UserInputForm},

        props: [],

        data() {
            return {
                company: {
                    apexInfo: null,
                    selfManage: false,
                    email: null,
                    users: [],
                    phone: null,
                    name: null,
                    owner: null,
                    since: new Date().getFullYear()
                },
                user: {
                    userName: null,
                    email: null,
                    phone: null,
                    password: null,
                    isAdmin: false
                }
            }
        },

        methods: {
            submitCompanyForm() {
                this.$store.dispatch('add_company', this.company)
            },

            submitUserForm() {
                this.company.users.push(this.user)
                this.user = null;
            }
        },

        computed: {
            companyUsers() {
                return this.$store.getters.getUsersForCompany()
            }
        }
    }
</script>

<style scoped>
    button {
        margin-top: 20px;
        margin-right: 8px;
        background-color: rgb(0,138, 230);
        color:antiquewhite;
        border: 1px solid silver;
        border-radius: 12px;
        width: 7rem;
    }

    button.cancel {
        background-color: silver;
        /* color: rgb(0,138,230); */
        color: navy;
        width: 7rem;
    }

    button:hover {
        transform: brighten(-1.5%)
    }

    .columns-2 {
        display: grid;
        grid-template-columns: 50% 50%;
    }

    .existing-users-title {
        font-weight: 800;
    }

    .filler {
        font-weight: 900;
        font-size: 1.2rem;
    }

    .form-element {
        display: grid;
        grid-template-columns: 40% auto;
        margin-top: 8px;
        width: 100%;
    }

    input {
        border: 1px solid silver;
        border-radius: 4px;
        box-shadow: 0 0 3px 0 silver;
    }

    .is-admin {
        text-align: left;
    }

    label {
        text-align: right;
        margin-right: 12px;
        font-size: 0.9rem;
        font-weight: 900;
        color: black;
    }

    .no-bold {
        font-weight:inherit;
    }

    textarea {
        border-radius: 4px;
        font-family: 'Open Sans';
        box-shadow: 0 0 3px 0 silver;
        height: 6rem;
    }

    .users {
        border-left: 1px solid silver;
        margin-left: 20px;
    }

    .user-list {
        text-align: left;
        margin-left: 20px;
        margin-top: 20px;
    }
</style>