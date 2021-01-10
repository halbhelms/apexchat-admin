<template>
    <div class="edit">
        <!-- title -->
        <EditHeader :_companyName="company.name" />
        <!-- edit form  -->
        <div class="form">
            <div class="filler"></div>
            <div class="form-elements">
                <!-- name -->
                <div class="form-element">
                    <label for="name">Company name</label>
                    <input v-model="company.name" type="text" id="name" />
                </div>
                <!-- owner -->
                <div class="form-element">
                    <label for="owner">Owner</label>
                    <input v-model="company.owner" type="text" id="owner" />
                </div>
                <!-- email -->
                <div class="form-element">
                    <label for="email">Email</label>
                    <input v-model="company.email" type="text" id="email" />
                </div>
                <!-- phone -->
                <div class="form-element">
                    <label for="phone">Phone</label>
                    <input v-model="company.phone" type="text" id="phone" />
                </div>
                <!-- selfManage -->
                <div class="form-element">
                    <div></div>
                    <div>
                        <input type="checkbox" v-model="company.selfManage"  id="self-manage" />
                        <label class="no-bold" for="self-manage">We self-manage web work</label>
                    </div>
                </div>
                <!-- apex info -->
                <div class="form-element">
                    <label for="apex-info">Apex info</label>
                    <textarea v-model="company.apexInfo"  id="apex-info"></textarea>
                </div>
            </div>
            <div class="filler"></div>
        </div>
        <!-- buttons -->
        <router-link :to="{name: 'Companies'}">
            <button class="cancel">Cancel</button>
        </router-link>
        <button @click="submitForm" class="submit">Save Changes</button>
    </div>
</template>

<script>
    import EditHeader from '../components/edit/EditHeader'
    export default {
        name: 'Edit',

        components: {EditHeader},

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

    .form {
        display: grid;
        grid-template-columns: .5fr 3fr 2fr;
        text-align: left;
    }

    .form-element {
        display: grid;
        grid-template-columns: 1fr 1fr;
        margin-top: 8px;
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