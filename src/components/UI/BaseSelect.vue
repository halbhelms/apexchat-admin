<template>
    <div class="base-select">
        <label v-if="_label" :for="_id">{{ _label }}</label>
        <select 
            :name="_name" 
            :id="_id" 
            :value="modelValue"
            v-bind="{
                ...$attrs,
                onChange: ($event) => { $emit('update:modelValue', $event.target.value) }
            }">
            <!-- options for select -->
            <option
                v-for="option in _options"
                :key="option"
                :value="option"
                :selected="option === modelValue"
            >
                {{ option }}
            </option>
        </select>
    </div>
</template>

<script>
    export default {
        name: 'BaseSelect',

        components: {},

        props: {
            _id: {
                type:String,
                required: true
            },

            _label: {
                type: String,
                required: false
            },

            modelValue: {
                type: [ String, Number ],
                default: '', 
            },

            _name: {
                type: String,
                default: 'base-select'
            },

            _options: {
                type: Array,
                required: true,
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
    /* .base-select {
        position: relative;
        text-align: left;
    } */

    label{
        margin-right: 6px;
    }
</style>