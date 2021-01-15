<template>
    <div class="header">
        <div class="title">Videos for {{ _companyName }}</div>
    </div>
</template>

<script>
    export default {
        name: 'VideosHeader',
        components: {},
        props: ['_companyName'],
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

    .header {
        box-shadow: 0 0 6px 0 silver;
        background-color: rgb(237,240,245);
    }

    .title {
        font-size: 1.5rem;
        font-weight: bold;
        text-align: left;
        padding-left: 20px;
    }
</style>