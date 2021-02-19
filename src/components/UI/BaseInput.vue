<template>
    <div v-if="inDev" class="inDev">{{ $options.name }}</div>
    <div class="wrapper">
      <div class="go-bottom" :style="style">
        <div>
          <input 
            v-bind="$attrs" 
            :id="_id" 
            :name="_id" 
            :type="_type" 
            :value="modelValue" 
            @input="$emit('update:modelValue', $event.target.value)" 
            :required="_optional ? false : true"
          >
          <label :for="_id">{{ _label }}</label>
        </div>
      </div>
      <div class="errors" v-if="_errors.length">
        Field cannot be empty
      </div>
 </div>
</template>

<script>
    export default {
        name: 'BaseInput',

        components: {},

        props: {
            _id: {
                type: String,
                required: true,
            },

            _label: {
                type: String,
                required: true
            },

            _type: {
                type: String,
                default: 'text'
            },

            _optional: {
                type: Boolean,
                default: false,
            },

            _styles: {
              type: Object,
              default: ()=>{}
            },

            _errors: {
              type: Array,
              default: ()=>[],
            },

            modelValue: {
                type: [String, Number],
                default: '',
            }
        },
        
        data() {
            return {
                defaultStyles: {
                    fontFamily: 'inherit',
                    fontSize: 'inherit',
                }                
            }        
        },

        methods: {},

        computed: {
            style() {
                return {...this.defaultStyles, ...this.$props._styles}
            },          
        }
    }
</script>

<style scoped>
* {
  box-sizing: border-box;
}

input {
  font-family: inherit;
}

.edit {

}

/* .wrapper {
    width: 600px;
}

.errors {
  width: 220px;
  border: 1px solid red;
  position: relative;
  top: -42px;
  left: 340px;
  color: red;
  font-size: .7rem;
  text-align: left;
  font-style: italic;
} */

/* .base-button{
    display: inline-block;
} */

div {
  width: 320px;
  /* margin-left: 20px; */
  /* float: left; */
  /* margin: 20px; */
}

div > div {
  position: relative;
  overflow: hidden;
}

div input[class='edit'] {
    background: white;
}

div input, div textarea {
  width: 100%;
  border: 1px solid silver;
  background: none;
  position: relative;
  top: 0;
  left: 0;
  z-index: 1;
  padding: 8px 12px;
  outline: 0;
}
/* div input:valid, div textarea:valid {
  background: white;
} */
div input:focus, div textarea:focus {
  border-color: #0080E6;
}
div input:focus + label, div textarea:focus + label {
  background: #0080E6;
  color: white;
  font-size: 70%;
  padding: 1px 6px;
  z-index: 2;
}
div label {
  transition: background 0.2s, color 0.2s, top 0.2s, bottom 0.2s, right 0.2s, left 0.2s;
  position: absolute;
  color: #999;
  padding: 7px 6px;
  text-align: left;
}
div textarea {
  display: block;
  resize: vertical;
}

div.go-bottom{
  margin-top: 16px;
}

div.go-bottom input, div.go-bottom textarea {
  padding: 12px 12px 12px 12px;
}
div.go-bottom label {
  top: 0;
  bottom: 0;
  left: 0;
  width: 100%;
}
div.go-bottom input:focus, div.go-bottom textarea:focus {
  padding: 4px 6px 20px 6px;
}
div.go-bottom input:focus + label, div.go-bottom textarea:focus + label {
  top: 100%;
  margin-top: -16px;
}

div.go-right label {
  top: 2px;
  right: 100%;
  width: 100%;
  margin-right: -100%;
  bottom: 2px;
}
div.go-right input:focus + label, div.go-right textarea:focus + label {
  right: 0;
  margin-right: 0;
  width: 40%;
  padding-top: 5px;
}
</style> 