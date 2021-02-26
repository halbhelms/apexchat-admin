<template>
    <div class="chat-line-item" :class="[ _message.display_name == 'Visitor' ? 'visitor' : 'agent' ]" >
        <!-- a message from a chat -->
        <div class="message">
            <!-- who was texting -->
            <div class="participant">{{ _message.display_name }}</div>
            <!-- what did they say? -->
            <div class="text">{{_message.text}}</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ChatLineItem',

        components: {},

        props: ['_message'],

        data() {
            return {}
        },

        methods: {},

        computed: {}
    }
</script>

<style scoped>
    .agent {
        text-align: right;
    }

    .chat-line-item {
        margin-top: 2px;
        text-align: left;
        font-size: 0.9rem;
    }

    .visitor {
        color: rgb(0, 138, 230);
        font-weight: 600;
    }

    .message {
        display: grid;
        grid-template-columns: 90px 80%;
        font-size: .75rem;
        margin-bottom: 4px;
    }

    .participant {
        text-align: right;
        margin-right: 24px;
    }
</style>