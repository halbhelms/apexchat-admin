<template>
    <div v-if='inDev' class='inDev'>{{ options.name}}</div>
    <section-header>Login</section-header>
    <form class="login-form" @submit.prevent="loginUser">
        <base-input _label="Email" v-model="login.email" _id="email"></base-input>
        <base-input _label="Password" _type="password" v-model="login.password" _id="password"></base-input>
        <base-button :_styles="styles.submitButton" _type="submit">Login</base-button>
    </form>
</template>

<script>
    // import axios from 'axios'
    import BaseInput from '../components/UI/BaseInput'
    import BaseButton from '../components/UI/BaseButton'
    import axios from 'axios'
    export default {
        name: 'LoginForm',

        components: {BaseInput, BaseButton},

        props: [],

        data() {
            return {
                login: {
                    email: null,
                    password: null
                },

                styles: {
                    submitButton: {
                        base: {
                            marginTop: '24px',
                            position: 'relative',
                            left: '-40px',
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
            async loginUser() {
                try {
                    // attempt a login
                    let login = await axios.get('https://codelifepro.herokuapp.com/users/me', {
                        headers: {
                            Authorization: `Basic ${btoa(this.login.email +':' + this.login.password)}` 
                        }
                    })

                    console.log('login', login);
                    
                    // set successfully logged-in user as currentUser in Vuex
                    this.$store.dispatch('set_current_user', login.payload)
                    sessionStorage.setItem('currentUser', login.payload)
                } catch (err) {
                    console.log('Login error', err);
                }
            },
        },

        computed: {}
    }
</script>

<style scoped>
    .login-form {
        width: 400px;
        margin: 0 auto;
    }
</style>