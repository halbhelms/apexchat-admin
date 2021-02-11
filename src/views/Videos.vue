<template>
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
           <template v-slot:right>Right</template>
       </split-columns>
   </div>
</template>

<script>
    import VideoForm from '../components/videos/VideoForm'
    export default {
        name: 'Videos',

        components: {VideoForm},

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