<template>
    <div v-if="inDev" class="inDev">{{ $options.name }}</div>
    <div class="video-form">
        <base-input 
            class="breathe" 
            _id="video-title" 
            _label="Title" 
            v-model="video.title"></base-input>
        
        <base-textarea 
            class="breathe" 
            _id="video-embed-code" 
            _label="Embed code" 
            v-model="video.embed_code">
        </base-textarea>

        <base-button 
            class="button" 
            _radius="r-full" 
            _width="w-medium" 
            @button-clicked="submitForm"
        >
            <span v-if="_videoId">Update</span><span v-else>Add</span>
        </base-button>
    </div>
</template>

<script>
    export default {
        name: 'VideoForm',

        components: {},

        props: {
            _videoId: {
                type: Number,
                required: false,
            }
        },

        data() {
            return {
                video: {
                    company_id: this.$route.params.id
                }
            }
        },

        methods: {
            submitForm() {
                this.$store.dispatch('add_video', this.video)
                // reset video
                this.video = {company_id: this.$route.params.id}
            }
        },

        computed: {}
    }
</script>

<style scoped>
    .breathe {
        margin-left: 36px;
        margin-top: 20px;
    }

    .button {
        text-align: center;
    }

    .video-form {
        width: 400px;
        margin: 0 auto;
    }
</style>