<template>
    <div v-if="inDev" class="inDev">{{ $options.name }}</div>
    <div class="company-video">
        <div class="name">
            {{ _title }}
        </div>
        <div class="delete-action" @click="$emit('delete-video', _id)" />
    </div>
</template>

<script>
    export default {
        name: 'CompanyVideo',

        components: {},

        props: {
            _id: {
                type: Number,
                required: true,
            },

            _title: {
                type: String,
                required: true,
            },
        },

        emits: {
            'delete-video': (id) => {
                if (id) { return true}
                return false;
            }
        },

        data() {
            return {}
        },

        methods: {
            deleteVideo(id) {
                this.$emit('delete-video', id)
            }
        },

        computed: {}
    }
</script>

<style scoped>
    .company-video {
        text-align: left;
        padding-left: 10px;
        display: grid;
        grid-template-columns: 300px 20px;
        grid-gap: 0;
    }

    .delete-action{
        background-image: url('./delete.png');
        background-size: 140%;
        background-position: center;
        background-repeat:no-repeat;
        cursor: pointer;
    }
</style>