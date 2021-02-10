<template>
    <div class="the-existing-users">
        
    </div>
</template>

<script>
    export default {
        name: 'TheExistingUsers',

        components: {},

        props: [],

        data() {
            return {
                users: [],
            }
        },

        methods: {},

        computed: {},

        created() {
            this.users = this.$store.companyUsers
        }
    }
</script>

<style scoped>

</style>