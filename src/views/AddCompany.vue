<template>
<div class="edit">
    <!-- title -->
    <AddHeader/>
    <div class="columns-2">
    <!-- add form  -->
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
                    <input type="checkbox" v-model="company.selfManage"  id="self-manage" />
                    <label class="no-bold" for="self-manage">We self-manage web work</label>
                </div>
            </div>
            <!-- apex info -->
            <div class="form-element">
                <label for="apex-info">Apex info</label>
                <textarea v-model="company.apexInfo"  id="apex-info"></textarea>
            </div>
            <!-- since -->
            <div class="form-element">
                <label for="since">Customer since</label>
                <input v-model="company.since" type="text" id="since" />
            </div>            
            <div class="filler"></div>
        <!-- buttons -->
        <router-link :to="{name: 'Companies'}">
            <button class="cancel">Cancel</button>
        </router-link>
        <button @click="submitCompanyForm" class="submit">Save Changes</button>
        </div>
    </div>

    <!-- users -->
    <div class="users">
        <div class="form">
        <div class="filler">Users</div>
        <div class="form-elements">
            <!-- name -->
            <div class="form-element">
                <label for="username">User name</label>
                <input v-model="user.userName" type="text" id="username" />
            </div>
            <!-- owner -->
            <div class="form-element">
                <label for="user-password">Password</label>
                <input v-model="user.password" type="text" id="user-password" />
            </div>
            <!-- email -->
            <div class="form-element">
                <label for="user-email">Email</label>
                <input v-model="company.email" type="text" id="user-email" />
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
                    <input type="checkbox" v-model="user.isAdmin"  id="is-admin" />
                    <label class="no-bold" for="is-admin">User is an Admin</label>
                </div>
            </div>
            <div class="filler"></div>
            <!-- user buttons -->
            <button @click="clearUserForm" class="cancel">Cancel</button>
            <button @click="submitUserForm" class="submit">Add User</button>
            </div>
        </div>

        <!-- list of existing users -->
        <div class="user-list">
            <div class="existing-users-title">
                Existing Users
            </div>

            <div v-for="(user, index) in company.users" :key="index" class="user">
                <div class="existing-user">
                    <img src="/isAdmin.png">{{ user.userName }}
                </div>
            </div>
        </div>
    </div>
    </div>
</div>

</template>

<script>
    import AddHeader from '../components/add/AddHeader'
    export default {
        name: 'AddCompany',

        components: {AddHeader},

        props: [],

        data() {
            return {
                company: {
                    apexInfo: null,
                    selfManage: false,
                    email: null,
                    users: [],
                    phone: null,
                    name: null,
                    owner: null,
                    since: new Date().getFullYear()
                },
                user: {
                    userName: null,
                    email: null,
                    phone: null,
                    password: null,
                    isAdmin: false
                }
            }
        },

        methods: {
            submitCompanyForm() {
                this.$store.dispatch('add_company', this.company)
            },

            submitUserForm() {
                this.company.users.push(this.user)
                this.user = null;
            }
        },

        computed: {}
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

    .columns-2 {
        display: grid;
        grid-template-columns: 50% 50%;
    }

    .existing-users-title {
        font-weight: 800;
    }

    .filler {
        font-weight: 900;
        font-size: 1.2rem;
    }

    /* .form {
        display: grid;
        grid-template-columns: .5fr 3fr 2fr;
        text-align: left;
    } */

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
</style>