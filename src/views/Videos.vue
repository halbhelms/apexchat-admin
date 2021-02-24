<template>
    <div v-if="inDev" class="inDev">{{ $options.name }}</div>
   <div class="videos">
       <!-- section header -->
       <section-header>Videos: {{ selectedCompanyName }}</section-header>
       <!-- split columns layout -->
       <split-columns>
           <!-- add video form -->
           <template v-slot:left>
               <video-form></video-form>
           </template>

           <!-- existing videos -->
           <template v-slot:right>
               <the-existing-videos></the-existing-videos>
           </template>
       </split-columns>
   </div>
</template>

<script>
    import VideoForm from '../components/videos/VideoForm'
    import TheExistingVideos from '../components/videos/TheExistingVideos'
    export default {
        name: 'Videos',

        components: {VideoForm, TheExistingVideos},

        props: [],

        data() {
            return {
                
            }
        },

        methods: {},

        computed: {
            selectedCompanyName() {
                try {
                    return this.$store.getters.getCompanyById(this.$route.params.id).name
                } catch(err) {
                    return ''
                }
            },
        },

        created() {
            this.$store.dispatch('initialize_videos_for_company_id', this.$route.params.id)
        }
    }
</script>

<style scoped>

    
    .video-form {
        position: relative;
        left: 16px;
    }
</style>