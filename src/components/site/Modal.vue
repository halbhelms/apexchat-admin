<template>
    <div class="outer modal-on">
        <div class="modal-content">
            <div class="modal-header">
                <!-- header for lead -->
                <img v-if="_selectedLead.disputed" id="disputed-icon" src="../site/disputed.png" width="36"/>
                <span class="header-text">Details for Lead No. {{ _selectedLead.apex_lead_id }} </span>
                <!-- button to dismiss modal -->
                <img @click="modalOff" class="modal-exit" src="../site/modal-exit.png" width="36" />
            </div>
            <!-- contact information (1st column)-->
            <div class="contact-info">
                <!-- date and contact name -->
                <div class="contact-general la">
                    <div class="contact-date contact-box date la">
                        <div class="contact-date-title title la">Date</div>
                        <div class="contact-date-data data la">{{ date }}</div>
                    </div>
                    
                    <div class="contact-name contact-box name">
                        <div class="contact-name-title title la">Name</div>
                        <div class="contact-name-data data la">{{ _selectedLead.raw_data.name }}</div>
                    </div>
                </div>
                
                <!-- address (2d column) -->
                <div class="contact-address">
                    <div class="contact-location location la">
                        <div class="contact-location-title location-title la">Location</div>
                        <div class="contact-location-data data la">{{ location }}</div>
                    </div>
                </div>
                
                <!-- how to reach contact (3d column) -->
                <div class="contact-communication">
                    <div class="contact-phone contact-box">
                        <div class="contact-phone-title title la">
                            Phone
                        </div>
                        <div class="contact-phone-data data la">
                            {{ phone }}
                        </div>
                    </div>
                    <div class="contact-email contact-box">
                        <div class="contact-email-title title la">
                            Email
                        </div>
                        <div class="contact-email-data data la">
                            {{ email }}
                        </div>
                    </div>
                </div>
            </div>


            <!-- Chat messages -->

            <div class="chat" v-if="_chat">
                <!-- should we display only visitor responses? -->
                <div class="chat-separator">
                    <input @change="visitorMessagesOnly" type="checkbox" id="visitor-only" class="visitor-only" :value="visitorOnly">
                    <label for="visitor-only" class="visitor-only-label">Display visitor messages only</label>
                </div>
                <!-- display individual messages -->
                <ChatLineItem v-for="message in messages" :key="message" :_message="message"/>
            </div>
            <div class="chat missing" v-else>No chat found for this lead.</div>

        </div>
   </div>
</template>

<script>
    import { format } from 'date-fns'
    import ChatLineItem from '../leads/ChatLineItem'
    export default {
        name: 'Modal',

        components: { ChatLineItem },

        props: ['_selectedLead', '_chat'],

        data() {
            return {
                // lead: {},
                visitorOnly: false,
            }
        },

        methods: {
            modalOff() {
                this.$store.dispatch('remove_active_chat')
                this.$emit('modal-off')
            },

            visitorMessagesOnly() {
                this.visitorOnly = !this.visitorOnly
            }
        },

        computed: {
            date() {
                return format(new Date(this._selectedLead.generated_at), 'MM.dd.y  h:m aaa')
            },

            phone() {
                if (this._selectedLead.phone){
                    let p = this._selectedLead.phone.toString()
                    return `${p.substring(0,3)}.${p.substring(3,6)}.${p.substring(6,10)}`
                } else {
                    return "Missing"
                }
            },

            location() {
                if (this.$props._selectedLead.state || this.$props._selectedLead.state) {
                    return `${this.$props_selectedLead.city} ${this.$props._selectedLead.state}`
                } else {
                    return "Missing"
                }
            },

            email() {
                if (this.$props._selectedLead.email) {
                    return this.$props._selectedLead.email
                } else {
                    return "Missing"
                }
            },

            messages() {
                // if we only want to show visitor messages
                if (this.visitorOnly) {
                    return this.$props._chat.filter( message => message.display_name == 'Visitor')
                // or we want to display all messages
                } else {
                    return this.$props._chat
                }
            }
        }
    }
</script>

<style scoped>
    div.chat {
        width: 87%;
    }

      
    .chat-separator {
        border-bottom: 1px solid silver;
        border-top: 1px solid silver;
        margin-bottom: 12px;
        width: 87%;
    }
    .contact-box {
        display: grid;
        grid-template-columns: 30% auto 1%;
        text-align: left;
    }

    #disputed-icon{
        position: absolute;
        left: 240px;
        top: -4px;
    }

    .contact-info {
        display: grid;
        grid-template-columns: 35% 25% 30%;
        font-size: .85rem;
    }
/* left-align header info */
    .la {
        text-align: left;
    }

    .missing {
        margin-top: 22px;
    }

    .modal-content {
        width: 90%;
    }

    .modal-header {
        position: relative;
        width: 87%;
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

    .modal-exit {
        position: relative;
        top: 10px;
        left: 30px;
        cursor: pointer;
    }

    .modal-header {
        margin-bottom: 24px;
        border-bottom: 2px solid silver;
        font-size: 1.3rem;
        font-weight: 900;
    }

    .title {
        text-align: right;
        margin-right: 10px;
        font-weight: 800;
    }

    .location-title {
        text-align: left;
        font-weight: 800;
    }

    .visitor-only {
        font-size: .85rem;
    }

    .visitor-only-label {
        font-size: .8rem;
        margin-left: 4px;
        position: relative;
        top: -1px;
    }

    /* transition */
    /* .fade-enter {
        opacity: 0;
    }

    .fade-enter-active {
        transition: opacity 2s ease-out;
    } */
</style>