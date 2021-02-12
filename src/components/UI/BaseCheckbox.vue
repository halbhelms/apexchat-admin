<template>
    <div :class="base-checkbox">
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
            }
        },

        data() {
            return {}
        },

        methods: {},

        computed: {}
    }
</script>

<style scoped>
    .base-checkbox {
        /* position: relative; */
        /* width: 100%; */
        /* text-align: left; */
        /* margin-left: 36px; */
        
    }

    input {
        margin-right: 6px;
        font-family: inherit;
    }
</style>