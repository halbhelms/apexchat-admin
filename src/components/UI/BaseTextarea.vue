<template>
    <div v-if="inDev" class="inDev">{{ $options.name }}</div>
  <div class="go-bottom">
    <div>
      <textarea 
        v-bind="$attrs" 
        :id="_id" 
        :name="_id"
        :style="style"
        :value="modelValue" 
        @input="$emit('update:modelValue', $event.target.value)"
        required>
      </textarea>
      <label :for="_id">{{ _label }}</label>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'BaseTextarea',

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

            _rows: {
              type: Number,
              default: 5
            },

            _type: {
                type: String,
                default: 'text'
            },

            _styles: {
                type: Object,
                default: ()=>{}
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

textarea {
  font-family: inherit;
}

.base-textarea{
    display: inline-block;
}

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
div input:valid, div textarea:valid {
  background: white;
}
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

div.go-bottom {
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