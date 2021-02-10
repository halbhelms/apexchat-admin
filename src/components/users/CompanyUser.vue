<template>
    <div class="company-user">
        <div :class="[_isAdmin ? 'admin' : '']">
            
        </div>
        <div class="name">
            {{ _firstName }} {{ _lastName }}
        </div>
    </div>

</template>

<script>
    export default {
        name: 'CompanyUser',

        components: {},

        props: {
            _userId: {
                type: String,
                required: true,
            },

            _firstName: {
                type: String,
                required: true,
            },

            _lastName: {
                type: String,
                required: true,
            },

            _isAdmin: {
                type: Boolean,
                default: false,
            },
        },

        data() {
            return {}
        },

        methods: {},

        computed: {}
    }
</script>

<style scoped>
    .company-user {
        text-align: left;
        padding-left: 10px;
        display: grid;
        grid-template-columns: 40px auto;
        grid-gap: 0;
    }

    .admin {
        background-image:url('./admin-user.png');
        background-size: cover;
        background-position: center;
    }
</style>