<template>
    <div v-if="inDev" class="inDev">{{ $options.name }}</div>
    <section-header>Company Info</section-header>
    <form @submit.prevent="submitForm">
        <div class="company-info-form">
            <base-input _label="Company name" _id="company-name"  v-model="company.name"></base-input>
            
            <base-input _optional="true" _label="Website address" _id="domain" v-model="company.domain" _type="url" ></base-input>
            
            <base-input _optional="true" _label="Logo url" _id="logo-url" v-model="company.logo_url" ></base-input>
            
            <base-select _label="Time zone" :_styles="styles.timeZone" _id="time-zone" v-model="company.time_zone" :_options="timeZones"></base-select>
            
            <base-input _optional _label="Owner" _id="owner" v-model="company.owner" ></base-input>
            
            <base-input _label="Customer since (year)" _id="since" v-model="company.since" ></base-input>
            
            <base-input _label="Email" _type="email" _id="email" v-model="company.email" ></base-input>
            
            <base-input _optional="true" _label="Phone" _type="tel" _id="phone" v-model="company.phone" ></base-input>
            
            <base-input _label="Apex company ID" _id="apex-company-id" v-model="company.apex_company_id" ></base-input>
            
            <base-textarea _optional="true" _label="Apex info" _id="apex-info" v-model="company.apex_info" ></base-textarea>
            
            <base-checkbox _label="Self manage website?" :_styles="styles.selfManage" _id="self-managed-web" v-model="company.self_managed_web"></base-checkbox>
            
            <base-select _label="Active status" _id="status" v-model="company.status" :_options="statusOptions" :_styles="styles.activeStatus" class="select"></base-select>

            <base-button :_styles="styles.submitButton" _type="submit">{{ buttonLabel }}</base-button>
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
                company: {
                    id: null,
                    apex_company_id: null,
                    domain: null,
                    apex_info: null,
                    self_managed_web: false,
                    email: null,
                    logo_url: null,
                    phone: null,
                    name: null,
                    owner: null,
                    time_zone: null,
                    since: null,
                    status: 'active'
                },
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
                }
            }
        },

        methods: {
            submitForm() {
                // if $route.params.id, we're in editing mode
                if (this.$route.params.id) {
                    this.$store.dispatch('update_company', this.company)
                // otherwise, we're adding a company
                } else {
                    this.$store.dispatch('add_company', this.company)
                }
            },
        },

        computed: {
            buttonLabel() {
                if (this.$route.params.id) {
                    return 'Update'
                }
                return 'Add'
            }
        },

        mounted() {
            // if $route.params.id, use that company
            if (this.$route.params.id) {
                this.company = this.$store.getters.getCompanyById(this.$route.params.id)
            }
        }
    }
</script>

<style scoped>
    .company-info-form {
        width: 400px;
        margin: 0 auto;
    }

    .company-info-form * {
        margin: 0 auto;
        margin-top: 12px;
    }

    .company-info-form:last-child {
        margin-bottom: 24px;
    }

    #time-zone {
        margin: 0 auto;
        position: relative;
        left: -62px;
    }
</style>