<template>
    <div v-if="inDev" class="inDev">{{ $options.name }}</div>
   <div class="videos">
       <!-- section header -->
       <section-header>Videos: {{ selectedCompanyName }}</section-header>
       <!-- split columns layout -->
       <split-columns>
           <!-- add video form -->
           <template v-slot:left>
               <video-form @button-clicked="alert('Button clicked')"></video-form>
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

    
    .videos {

    }
</style>