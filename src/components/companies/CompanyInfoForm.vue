<template>
    <div class="form">
        <div class="filler">Company</div>
        <div class="form-elements">
            <!-- name -->
            <div class="form-element">
                <label for="name">Name</label>
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
                    <input type="checkbox" v-model="company.self_manage_web"  id="self-manage" />
                    <label class="no-bold" for="self-manage">Self-manages web work</label>
                </div>
            </div>
            <!-- apex company id -->
            <div class="form-element">
                <label for="apex-company-id">Apex company ID</label>
                <input v-model="company.apex_company_id"  id="apex-company-id" />
            </div>
            <!-- since -->
            <!-- apex info -->
            <div class="form-element">
                <label for="apex-info">Apex info</label>
                <textarea v-model="company.apex_info"  id="apex-info"></textarea>
            </div>
            <!-- since -->
            <div class="form-element">
                <label for="since">Customer since</label>
                <input v-model="company.customer_since" type="text" id="since" />
            </div>            
            <div class="filler"></div>
        <!-- buttons -->
        <router-link :to="{name: 'Companies'}">
            <button class="cancel">Cancel</button>
        </router-link>
        <button @click="submitForm" class="submit">Save Changes</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'CompanyInfoForm',

        components: {},

        props: {
            // _company will be sent in if this form is used for editing
            _company: {
                type: Object,
                required: false
            }
        },

        data() {
            return {
                company: {
                    id: null,
                    apex_company_id: null,
                    apex_info: null,
                    self_manage_web: false,
                    email: null,
                    users: [],
                    phone: null,
                    name: null,
                    owner: null,
                    customer_since: new Date().getFullYear()
                },
            }
        },

        methods: {
            submitForm() {
                // if _customer was passed as a prop, we're in editing mode
                if (this.$props._company) {
                    this.$emit('edited-company', this.company)
                // otherwise, we're adding a company
                } else {
                    this.$emit('added-company', this.company)
                }
            }
        },

        computed: {},

        mounted() {
            // if we receive _company as a prop, use that company
            if (this.$props._company) {
                this.company = this.$props._company
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
</style>