<template>
    <div v-if="inDev" class="inDev">{{ $options.name }}</div>
    <div class="header">
        <div class="title">Companies</div>
        <!-- add company -->
        <router-link :to="{name: 'AddCompany'}">
            <div class="add-company">
                <img class="add-icon" src="./add.png" width="24" />
                <span class="add-text">Add company</span>
            </div>
        </router-link>
    </div>
</template>

<script>
    export default {
        name: 'CompaniesHeader',
        components: {},
        props: {},
        data() {
            return {}
        },
        methods: {
            setDateFilter(filter) {
                console.log('filter', filter);
                
            }
        },
        computed: {}
    }
</script>

<style scoped>
    .add-icon {
        position: relative;
        top: 6px;
    }

    .add-company {
        text-align: left;
        /* margin-top: 6px; */
        margin-right: 20px;
    }

    .add-company:hover {
        transition: all 0.3s ease-in;
        transform: scale(1.05);
    }

    .add-company:active, .add-company:visited {
        text-decoration: none;
        color: black;
    }

    .add-text {
        position: relative;
        /* top: 6px; */
        margin-left: 12px;
        font-weight: 800;
    }

    .header {
        box-shadow: 0 0 6px 0 silver;
        background-color: rgb(237,240,245);
        display: grid;
        grid-template-columns: 3fr 2fr;
    }

    .title {
        font-size: 1.5rem;
        font-weight: bold;
        text-align: left;
        padding-left: 20px;
    }
</style>