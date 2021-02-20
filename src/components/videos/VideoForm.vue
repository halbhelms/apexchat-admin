<template>
    <div v-if="inDev" class="inDev">{{ $options.name }}</div>
    <div class="video-form">
        <form @submit.prevent="submitForm">
            <base-textarea 
                _id="video-title" 
                _label="Title" 
                :_styles="styles.title"
                v-model="video.title">
            </base-textarea>
            
            <base-textarea 
                class="breathe" 
                _id="video-embed-code" 
                _label="Embed code" 
                :_styles="styles.embedCode"
                v-model="video.embed_code">
            </base-textarea>

            <base-button 
                class="button" 
                :_styles="styles.submitButton"
            >
                <span v-if="_videoId">Update</span><span v-else>Add</span>
            </base-button>
        </form>
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
                },

                styles: {
                    submitButton: {
                        base: {
                            marginTop: '12px',
                            position: 'relative',
                            left: '-42px'
                        },
                        button: {
                            borderRadius: '20px',
                            width: '82px',
                        }
                    },
                    
                    title: {
                        height: '48px',
                        overflow: 'hidden'
                    },

                    embedCode: {
                        height: '112px'
                    }
                }              
            }
        },

        methods: {
            submitForm() {
                this.$store.dispatch('add_video', this.video)
                // reset video
                this.video = {company_id: this.$route.params.id}
            },
        },

        computed: {}
    }
</script>

<style scoped>
    .video-form {
        width: 400px;
        margin: 0 auto;
    }
</style>