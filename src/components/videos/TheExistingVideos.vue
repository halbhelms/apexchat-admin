<template>
    <div v-if="inDev" class="inDev">{{ $options.name }}</div>
    <h3>Existing Videos</h3>
    <div class="the-existing-videos">
        <company-video 
            class="pointer" 
            v-for="video in companyVideos" 
            :key="video.id" 
            :_id="video.id" 
            :_title="video.title" 
            @delete-video="deleteVideo"
        >
        </company-video>
    </div>
</template>

<script>
    import CompanyVideo from './CompanyVideo'
    export default {
        name: 'TheExistingVideos',

        components: {CompanyVideo},

        props: {},

        emits: {},

        data() {
            return {
                users: [],
            }
        },

        methods: {
            deleteVideo(id) {
                this.$store.dispatch('delete_video', id)
            }
        },

        computed: {
            companyVideos() {
                return this.$store.getters.getVideosForCompany(this.$route.params.id)
            }
        },

        created() {}
    }
</script>

<style scoped>
    * {
        margin: 0;
    }
    
    .pointer {
        cursor: pointer;
    }

    h3 {
        text-align: left;
        margin: 12px 0 12px 28px;

    }

    .the-existing-videos {
        /* border: 1px solid silver; */
        margin-right: 16px;
    }
</style>