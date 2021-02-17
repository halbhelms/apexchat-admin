<template>
    <div class="edit">
        <!-- title -->
        <!-- <EditHeader :_companyName="company.name" /> -->
        <section-header>{{ company.name }}</section-header>
        <!-- edit form  -->
        <div class="columns-2">
            <CompanyInfoForm :_company="company" />
            <UserInputForm :_users="users" />
        </div>
    </div>
</template>

<script>
    import EditHeader from '../components/edit/EditHeader'
    import CompanyInfoForm from '../components/companies/CompanyInfoForm'
    import UserInputForm from '../components/companies/UserInputForm'
import SectionHeader from '../components/UI/SectionHeader.vue'

    export default {
        name: 'EditCompany',

        components: {EditHeader, CompanyInfoForm, UserInputFormSectionHeader},

        props: [],

        data() {

            return {
                company: null
            }
        },

        methods: {
            submitForm() {
                this.$store.dispatch('edit_company', this.company)
            }
        },

        computed: {},

        created() {
            this.company = this.$store.getters.getCompanyById(this.$route.params.id)
            this.users = this.$store.getters.getCompanyUsersForCompany(this.$route.params.id)
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

    /* .form {
        display: grid;
        grid-template-columns: .5fr 3fr 2fr;
        text-align: left;
    } */

    .form-element {
        display: grid;
        grid-template-columns: 1fr 1fr;
        margin-top: 8px;
    }

    .form-elements {
        width: 100%;
    }

    input {
        border: 1px solid silver;
        border-radius: 4px;
        box-shadow: 0 0 3px 0 silver;
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
</style>