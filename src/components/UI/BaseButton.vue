<template>
    <div :class="['base-button', _display]">
        <button 
            @click="$emit('button-clicked')" 
            :class="[_mode, _radius, _width]"
        >
            <slot></slot>
        </button>
    </div>
</template>

<script>
    export default {
        name: 'BaseButton',

        components: {},

        props: {
            _mode: {
                type: String,
                default: 'primary'
            },

            _radius: {
                type: String,
                default: 'r-small'
            },

            _width: {
                type: String,
                default: 'w-float'
            },

            _display: {
                type: String,
                default: 'ib'
            }
        },

        emits: ['button-clicked'],

        data() {
            return {}
        },

        methods: {},

        computed: {}
    }
</script>

<style scoped>
.base-button {
    margin-left: 6px;
    margin-right: 6px;
    margin-top: 18px;
    text-align: left;
}

button {
    border: none;
    outline: 0;
    padding: 4px 8px 4px 8px;
    text-decoration: none;
    cursor: pointer;
    text-align: center;
	display:inline-block;
	text-shadow:0px 1px 0px #2f6627;
    font-family: inherit;
}


button:hover {
    outline: 0;
    font-weight: 900;
    box-shadow: 0px 0px 2px 2px rgb(0, 138, 220);
    border: none;
    transition: all 500ms ease-in-out, transform 300ms ease;
}

button:active {
    outline: 0;
    transform: scale(0.99);
    position:relative;
    top:1px;
}

button:visited {
    text-decoration: none;
    outline: 0;
}

/* display */
.ib {
    display: inline-block;
}
.bk {
    display: block;
}

/* radius */
.r-none {
    border-radius: 0;
}

.r-small {
    border-radius: 4px;
}

.r-full {
    border-radius: 50px;
}

/* widths */
.w-small {
    width: 2rem;
}

.w-medium {
    width: 5rem;
}

.w-float {
    /* max-width: 100rem; */
}

/* modes */
.basic {
   background-color: white;
   color: black; 
}

.primary {
    background-color: rgb(0,138,230);
    color: white;
    transition: background-color 250ms ease-in-out, transform 150ms ease;
}

.danger {
    background-color: red;
    color: white;
}

.cancel {
    background-color: silver;
}


</style>