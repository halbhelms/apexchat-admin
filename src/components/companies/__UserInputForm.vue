<template>
    <div class="users">
        <div class="form">
        <div class="filler">Users</div>
        <div class="form-elements">
            <!-- username -->
            <div class="form-element">
                <label for="username">User name</label>
                <input v-model="user.user_name" type="text" id="username" />
            </div>
            <!-- first name -->
            <div class="form-element">
                <label for="user-first-name">First name</label>
                <input v-model="user.first_name" type="text" id="user-first-name" />
            </div>
            <!-- last name -->
            <div class="form-element">
                <label for="user-last-name">Last name</label>
                <input v-model="user.last_name" type="text" id="user-last-name" />
            </div>
            <!-- email -->
            <div class="form-element">
                <label for="user-email">Email</label>
                <input v-model="user.email" type="text" id="user-email" />
            </div>
            <!-- phone -->
            <div class="form-element">
                <label for="user-phone">Phone</label>
                <input v-model="user.phone" type="text" id="user-phone" />
            </div>
            <!-- is user an admin? -->
            <div class="form-element is-admin">
                <div></div>
                <div>
                    <input type="checkbox" v-model="user.is_admin"  id="is-admin" />
                    <label class="no-bold" for="is-admin">User is an Admin</label>
                </div>
            </div>
            <div class="filler"></div>
            <!-- user buttons -->
            <button @click="clearUserForm" class="cancel">Cancel</button>
            <button @click="submitForm" class="submit">Add User</button>
            </div>
        </div>


        <!-- list of existing users -->
        <div class="user-list">
            <div class="existing-users-title">
                Existing Users
            </div>

            <div v-for="(user, index) in users" :key="index" class="user">
                <div class="existing-user">
                    <img src="/isAdmin.png">{{ user.first_name }} {{ user.last_name }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'UserInputForm',

        components: {},

        props: {
            _users: {
                type: Array,
                required: true
            }
        },

        data() {
            return {
                user: {
                    id: null,
                    company_id: 1,
                    user_name: null,
                    password: null,
                    email: null,
                    phone: null,
                    is_admin: false,
                    first_name: null,
                    last_name: null
                }
            }
        },

        methods: {
            submitForm() {

            }
        },

        computed: {},

        mounted() {
            this.users = this.$props._users
        }
    }
</script>

<style scoped>
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

    .users {
        border-left: 1px solid silver;
        margin-left: 20px;
    }

    .user-list {
        text-align: left;
        margin-left: 20px;
        margin-top: 20px;
    }

    .existing-users-title {
        font-weight: 800;
    }

    .filler {
        font-weight: 900;
        font-size: 1.2rem;
    }
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
</style>