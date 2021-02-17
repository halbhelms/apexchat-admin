<template>
    <div v-if="inDev" class="inDev">{{ $options.name }}</div>
    <div :class="base-checkbox" :style="width">
        <input :id="_id" type="checkbox" :checked="modelValue" @change="$emit('update:modelValue', $event.target.checked)">
        <label :for="_id">{{ _label }}</label>
    </div>
</template>

<script>
    export default {
        name: 'BaseCheckbox',

        components: {},

        props: {
            _id: {
                type: String,
                required: true,
            },

            _label: {
                type: String,
                required: true,
            },

            modelValue: {
                type: Boolean,
                default: false,
            },

            _display: {
                type: String,
                default: 'ib',
            },

            _width: {
                type: String,
                default: '',
            },

            _left: {
                type: Number,
                default: 0,
            }
        },

        data() {
            return {}
        },

        methods: {},

        computed: {
            width() {
                return {
                    "width": this.$props._width,
                    "margin-top": "16px",
                    "display": 'relative',
                    "left": this.$props._left,
                    // "outline": "1px solid red",
                    "text-align": "left"
                }
            }
        }
    }
</script>

<style scoped>
    input {
        margin-right: 6px;
        font-family: inherit;
    }

    .base-checkbox {
        outline: 1px solid red;
    }
</style>