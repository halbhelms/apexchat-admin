<template>
    <div v-if="inDev" class="inDev">{{ $options.name }}</div>
    <section-header>Company Info</section-header>
    <form @submit.prevent="submitForm">
        <div class="company-info-form">
            <!-- company name -->
            <div class="form-control">
                <input 
                    id="name" 
                    class="text-input" 
                    v-model="company.name" 
                    type="text" />
                <label for="name">Company name</label>
            </div>
            <!-- company email -->
            <div class="form-control">
                <input 
                    id="email" 
                    class="text-input" 
                    v-model="company.email" 
                    type="text" />
                <label for="email">Company email</label>
            </div>
            <!-- company phone -->
            <div class="form-control">
                <input 
                    id="phone" 
                    class="text-input" 
                    v-model="company.phone" 
                    type="tel" />
                <label for="phone">Company Phone</label>
            </div>
            <!-- company domain -->
            <div class="form-control">
                <input 
                    id="domain" 
                    class="text-input" 
                    v-model="company.domain" 
                    type="text" />
                <label for="domain">Website address</label>
            </div>
            <!-- company logo url -->
            <div class="form-control">
                <input 
                    id="logo-url" 
                    class="text-input" 
                    v-model="company.logo_url" 
                    type="text" />
                <label for="logo-url">URL to logo image</label>
            </div>
            <!-- time zone -->
            <div class="form-control">
                <select 
                    class="timezone" 
                    id="time-zone" 
                    v-model="company.time_zone">
                    <option v-for="timeZone in timeZones" :key="timeZone" :value="timeZone">{{ timeZone }}</option>
                </select>
                <label for="time-zone">Time zone</label>
            </div>
            <!-- company owner -->
            <div class="form-control">
                <input 
                    id="owner" 
                    class="text-input" 
                    v-model="company.owner" 
                    type="text" />
                <label for="owner">Owner</label>
            </div>
            <!-- company since -->
            <div class="form-control">
                <input 
                    id="since" 
                    class="text-input" 
                    v-model="company.since" 
                    type="text" />
                <label for="since">Customer since (year)</label>
            </div>
            <!-- Apex company id-->
            <div class="form-control">
                <input 
                    id="apex_company_id" 
                    class="text-input" 
                    v-model="company.apex_company_id" 
                    type="tel" />
                <label for="apex_company_id">Apex company ID</label>
            </div>
            <!-- Apex company name-->
            <div class="form-control">
                <input 
                    id="apex_company_id" 
                    class="text-input" 
                    v-model="company.apex_company_name" 
                    type="tel" />
                <label for="apex_company_id">Apex company name</label>
            </div>
            <!-- other Apex company info-->
            <div class="form-control">
                <textarea 
                    id="apex_info" 
                    class="text-input" 
                    v-model="company.apex_info" />
                <label class="textarea" for="apex_info">Other Apex company info</label>
            </div>
            <!-- Self managing?-->
            <div class="form-control">
                <div class="checkbox-control">
                    <input 
                        type="checkbox" 
                        id="self-managed" 
                        class="checkbox" 
                        :value="status" />
                    <label class="checkbox-label" for="self-managed">Self manages website?</label>
                </div>
            </div>
            <!-- Status?-->
            <div class="form-control">
                <div class="checkbox-control">
                    <input 
                        type="checkbox" 
                        id="active-status" 
                        class="checkbox" 
                        @click="updateStatus"
                        />
                    <label 
                        class="checkbox-label" 
                        for="active-status">Account active?</label>
                </div>
            </div>
            
            <button type="submit">{{ buttonLabel }}</button>

        </div>
    </form>
</template>

<script>
    export default {
        name: 'CompanyInfoForm',

        components: {},

        props: {},

        data() {
            return {
                statusOptions: ['active', 'paused'],

                timeZones: [
                    'Eastern Time (US & Canada)', 
                    'Central Time (US & Canada)', 
                    'Mountain Time (US & Canada)', 
                    'Pacific Time (US & Canada)', 
                    'Alaska', 
                    'Hawaii'],
                styles: {
                    timeZone: {
                        fontSize: '.8rem',
                        // marginLeft: '-19px',
                        position: 'relative',
                        left: '-17px',
                        marginTop: '16px',
                    },
                    activeStatus: {
                        textAlign: 'right',
                        marginRight: '80px',
                        fontSize: '.8rem',
                    },
                    selfManage: {
                        textAlign: 'left',
                        fontSize: '.8rem',
                        marginTop: '16px',
                    },
                    submitButton: {
                        base: {
                            marginTop: '12px',
                            position: 'relative',
                            left: '-40px'
                        },
                        button: {
                            borderRadius: '20px',
                            width: '82px',
                        }
                    }
                },
                company: {
                    name: '',
                    domain: '',
                    logo_url: '',
                    time_zone: '',
                    owner: '',
                    email: '',
                    phone: '',
                    apex_company_id: '',
                    apex_company_name: '',
                    apex_info: '',
                    status: '', 
                    self_managed_web: false,
                }
            }
        },

        methods: {
            submitForm() {
                // make sure phone is all-numeric
                if (this.company.phone) {
                    this.company.phone = this.company.phone.replace(/\D/g, '');
                }
                // if $route.params.id, we're in editing mode
                if (this.$route.params.id && this.company.name) {
                    this.$store.dispatch('update_company', this.company)
                // otherwise, we're adding a company
                } else {
                    this.$store.dispatch('add_company', this.company)
                }
            },

            updateStatus(event) {
                if (event.target.checked) {
                    this.company.status = 'active'
                } else {
                    this.company.status = 'suspended'
                }
            },
        },

        computed: {
            buttonLabel() {
                if (this.$route.params.id) {
                    return 'Update'
                }
                return 'Add'
            },

            status() {

            }
        },

        mounted() {
            if (this.$route.params.id) {
                this.company =  this.$store.getters.getCompanyById(this.$route.params.id)
            } 
        },
    }
</script>

<style scoped>
    :root {
        --blue: rgb(17,107,227);
    }
    .company-info-form {
        width: 400px;
        margin: 0 auto;
    }

    .form-control {
        position: relative;
        margin: 0 auto;
        text-align: left;
    }

    textarea.text-input {
        height: 5rem;
    }
    .text-input, .timezone {
        width: 100%;
        height: 2.5rem;
        display: relative;
        font-size: 1.4rem;
    }

    label {
        display: block;
        text-align: left;
        position: relative;
        /* background-color: var(--blue); */
        background-color: rgb(17,107,227);
        color: white;
        top: -12px;
        padding-left: 6px;
    }

    label.textarea {
        position: relative;
        top: -18px;
    }

    label.checkbox-label {
        display: inline-block;
        width: 90%;
        position: relative;
        left: 20px;
    }

    div.checkbox-control {
        background: rgb(17,107,227);
        /* background: var(--blue) */
    }

    div.checkbox-control input {
        position: relative;
        bottom: 6px;
        left: 6px;
    }
    div.checkbox-control label {
        position: relative;
        top: -6px;
        left: 6px;
    }

    .company-info-form * {
        margin: 0 auto;
        margin-top: 12px;
    }

    .company-info-form:last-child {
        margin-bottom: 24px;
    }

    button {
        width: 200px;
        height: 40px;
        background: rgb(17,107,227);
        /* background: var(--blue); */
        color: white;
        font-size: 1.4rem;
        border-radius: 20px;
        position: relative;
        top: 20px;
    }

</style>