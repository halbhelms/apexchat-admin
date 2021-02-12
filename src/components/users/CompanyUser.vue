<template>
    <div class="company-user">
        <div :class="[_isAdmin ? 'admin' : '']">
            
        </div>
        <div class="name" @click="$emit('edit-user', _userId)">
            {{ _firstName }} {{ _lastName }}
        </div>
        <div class="delete-action" @click="$emit('delete-user', _userId)" />
    </div>

</template>

<script>
    export default {
        name: 'CompanyUser',

        components: {},

        props: {
            _userId: {
                type: Number,
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

        emits: {
            'edit-user': (userId) => {
            console.log("🚀 ~ file: CompanyUser.vue ~ line 43 ~ userId", userId)
                if (userId) { return true}
                return false;
            }
        },

        data() {
            return {}
        },

        methods: {
            editUser(userId) {
                this.$emit('edit-user', userId)
            }
        },

        computed: {}
    }
</script>

<style scoped>
    .company-user {
        text-align: left;
        padding-left: 10px;
        display: grid;
        grid-template-columns: 40px 220px 30px;
        grid-gap: 0;
    }

    .admin {
        background-image:url('./admin-user.png');
        background-size: cover;
        background-position: center;
    }

    .delete-action{
        background-image: url('./delete.png');
        background-size: 120%;
        background-position: center;
        cursor: pointer;
    }
</style>