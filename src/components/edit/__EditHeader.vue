<template>
    <div v-if="inDev" class="inDev">{{ $options.name }}</div>
    <div class="header">
        <!-- <div class="title">Edit: {{ _companyName }}</div> -->
        <section-header>{{ _companyName }}</section-header>
    </div>
</template>

<script>
import SectionHeader from '../UI/SectionHeader.vue';
    export default {
        name: 'EditHeader',
        components: {SectionHeader},
        props: {
            _companyName: {
                type: String,
                required: true
            }
        },
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