<template>
    <VideosHeader :_companyName="selectedCompanyName"/>
    <div class="videos">

        <!-- list of customer's existing videos -->
        <div class="existing-videos">
            <!-- title for existing videos -->
            <div class="existing-videos-title">
                Video List
            </div>
            <!-- list of existing videos -->
            <div class="existing-videos-list">
                <!-- TODO: Display list -->
            </div>
        </div>

        <!-- form for adding new Videos -->
        <div class="video-add-form">
            <div class="video-add-form-title">
                Add a Video for {{ selectedCompanyName }}
            </div>
        </div>
    </div>
</template>

<script>
    import VideosHeader from '../components/videos/VideosHeader'
    export default {
        name: 'Videos',

        components: {VideosHeader },

        props: [],

        data() {
            return {
                
            }
        },

        methods: {},

        computed: {
            selectedVideos() {
                return this.$store.getters.getVideosForCompany(this.$route.params.id)
            },

            selectedCompanyName() {
                return this.$store.getters.getCompanyById(this.$route.params.id).name
            },
        },

        created() {

        }
    }
</script>

<style scoped>
    * {
        outline: 1px solid red;
    }
    
    .videos {
        display: grid;
        grid-template-columns: 50% 50%;
    }
</style>