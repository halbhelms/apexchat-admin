<template>
    {{ user }}
    <base-button _mode="cancel" _width="w-medium" @click="sayHello">Hello</base-button>
    <base-button _mode="primary" _width="w-medium" @click="sayGoodbye">Goodbye</base-button>
    <base-input _id="first-name" _label="First Name" v-model="user.firstName"></base-input>
    <base-input _id="last-name" _label="Last Name" v-model="user.lastName"></base-input>
    <base-checkbox _id="is-admin" _label="User is an Admin" v-model="user.isAdmin" _display="bk"></base-checkbox>
    <div class="submit-button">
        <base-button _mode="primary" _width="w-medium" _display="bk" @click="submitForm">Add User</base-button>
    </div>

</template>

<script>
import BaseButton from '../components/UI/BaseButton.vue'
import BaseCheckbox from '../components/UI/BaseCheckbox.vue'
import BaseInput from '../components/UI/BaseInput.vue'
    export default {
        name: 'Temp',

        components: {BaseInput, BaseCheckbox, BaseButton},

        props:[], 
                
        data() {
            return {
                user: {
                    firstName: null,
                    lastName: null,
                    isAdmin: false,
                }
            } 
        },

        methods: {
            sayHello() {
                console.log('Hello')
            },
            sayGoodbye() {
                console.log('Goodbye')
            },
        },

        computed: {}
    }
</script>

<style scoped>
.submit-button {
    margin-left: 154px;
}
</style>