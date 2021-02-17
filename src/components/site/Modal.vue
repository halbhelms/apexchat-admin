<template>
    <div class="outer modal-on">
        <div class="modal-content">
            <div class="modal-header">
                <!-- header for lead -->
                <img v-if="_selectedLead.disputed" id="disputed-icon" src="../site/disputed.png" width="36"/>
                <span class="header-text">Details for Lead No. {{ _selectedLead.id }} </span>
                <!-- button to dismiss modal -->
                <img @click="modalOff" class="modal-exit" src="../site/modal-exit.png" width="36" />
            </div>
            <!-- contact information (1st column)-->
            <div class="contact-info">
                <!-- date and contact name -->
                <div class="contact-general">
                    <div class="contact-date contact-box">
                        <div class="contact-date-title title">Date</div>
                        <div class="contact-date-data data">{{ date }}</div>
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
                        <div class="contact-location-data data">{{ _selectedLead.location }}</div>
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


            <!-- Chat messages -->

            <div class="chat" v-if="_chat">
                <!-- should we display only visitor responses? -->
                <div class="chat-separator">
                    <input @change="visitorMessagesOnly" type="checkbox" id="visitor-only" class="visitor-only" :value="visitorOnly">
                    <label for="visitor-only">Display visitor messages only</label>
                </div>
                <!-- display individual messages -->
                <ChatLineItem v-for="(message, index) in messages" :key="index" :_message="message"/>
            </div>
            <div class="chat" v-else>No chat found for this lead.</div>

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
                this.$emit('modal-off')
            },

            visitorMessagesOnly() {
                this.visitorOnly = !this.visitorOnly
            }
        },

        computed: {
            date() {
                return format(this._selectedLead.date, 'M.d.y  :  h:m aaa')
            },

            phone() {
                let p = this._selectedLead.phone.toString()
                return `${p.substring(0,3)}.${p.substring(3,6)}.${p.substring(6,10)}`
            },

            messages() {
                // if we only want to show visitor messages
                if (this.visitorOnly) {
                    return this.$props._chat.filter( message => message.participantDisplayName == 'Visitor')
                // or we want to display all messages
                } else {
                    return this.$props._chat
                }
            }
        }
    }
</script>

<style scoped>
    .chat-separator {
        border-bottom: 1px solid silver;
        border-top: 1px solid silver;
        margin-bottom: 12px;
    }
    .contact-box {
        display: grid;
        grid-template-columns: 30% auto;
        text-align: left;
    }

    #disputed-icon{
        position: absolute;
        left: 240px;
        top: -4px;
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

    .modal-header {
        position: relative;
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
        float: right;
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

    /* transition */
    .fade-enter {
        opacity: 0;
    }

    .fade-enter-active {
        transition: opacity 2s ease-out;
    }
</style>