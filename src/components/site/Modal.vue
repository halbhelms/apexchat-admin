<template>
    <div class="outer modal-on">
        <div class="modal-content">
            <!-- contact information (1st column)-->
            <div class="contact-info">
                <!-- date and contact name -->
                <div class="contact-general">
                    <div class="contact-date contact-box">
                        <div class="contact-date-title title">Date</div>
                        <div class="contac t-date-data data">{{ date }}</div>
                    </div>
                    
                    <div class="contact-name contact-box">
                        <div class="contact-name-title title">Name</div>
                        <div class="contact-name-data data">{{ _selectedLead.contact }}</div>
                    </div>
                </div>
                
                <!-- address (2d column) -->
                <div class="contact-address">
                    <div class="contact-location contact-box location">
                        <div class="contact-location-title title">Location</div>
                        <div class="contact-location-data data">{{ _selectedLead.address }}</div>
                    </div>
                </div>
                
                <!-- how to reach contact (3d column) -->
                <div class="contact-communication">
                    <div class="contact-phone contact-box">
                        <div class="contact-phone-title title">
                            Phone
                        </div>
                        <div class="contact-phone-data data">
                            {{ phone }}
                        </div>
                    </div>
                    <div class="contact-email contact-box">
                        <div class="contact-email-title title">
                            Email
                        </div>
                        <div class="contact-email-data data">
                            {{ _selectedLead.email }}
                        </div>
                    </div>
                </div>
            </div>

            <div class="chat">
                Chat
            </div>

        </div>
   </div>
</template>

<script>
    import { format } from 'date-fns'
    export default {
        name: 'Modal',

        components: {},

        props: ['_selectedLead', '_chat'],

        data() {
            return {
                lead: {},
                chat: []
            }
        },

        methods: {},

        computed: {
            date() {
                return format(this._selectedLead.date, 'M.d.y  :  h:m aaa')
            },

            phone() {
                let p = this._selectedLead.phone.toString()
                return `${p.substring(0,3)}.${p.substring(3,6)}.${p.substring(6,10)}`
            }
        }
    }
</script>

<style scoped>
    .contact-box {
        display: grid;
        grid-template-columns: 30% auto;
        text-align: left;
    }

    .location {
        border-right: 1px solid silver;
        border-left: 1px solid silver;
    }

    .contact-info {
        display: grid;
        grid-template-columns: auto auto auto;
    }

    .modal-content {
        width: 90%;
    }

    .modal-on {
    /* display: none;  */
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0,0,0); /* Fallback color */
    background-color: rgba(0,0,0,0.7); /* Black w/ opacity */
    }

    .modal-off {
        display: none;
    }

    /* Modal Content/Box */
    .modal-content {
        background-color: #fefefe;
        margin: 112px auto; /* 15% from the top and centered */
        padding: 20px;
        border: 1px solid #888;
        border-radius: 12px;
        width: 90%; /* Could be more or less, depending on screen size */
        display: grid;
    }


    .title {
        text-align: right;
        margin-right: 10px;
        font-weight: 800;
    }
</style>