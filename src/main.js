import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import BaseButton from './components/UI/BaseButton.vue'
import BaseInput from './components/UI/BaseInput.vue'
import BaseCheckbox from './components/UI/BaseCheckbox.vue'
import BaseTextarea from './components/UI/BaseTextarea.vue'
import BaseSelect from './components/UI/BaseSelect.vue'
import SectionHeader from './components/UI/SectionHeader.vue'
import SplitColumns from './components/UI/SplitColumns.vue'

String.prototype.toProperCase = function () {
    return this.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

const app = createApp(App)
  .use(store)
  .use(router)

app.component('base-button', BaseButton)
app.component('base-input', BaseInput)
app.component('base-checkbox', BaseCheckbox)
app.component('base-textarea', BaseTextarea)
app.component('base-select', BaseSelect)
app.component('section-header', SectionHeader)
app.component('split-columns', SplitColumns)

app.config.globalProperties.inDev = false
app.config.globalProperties.apiUrl = "https://codelifepro.herokuapp.com/"

app.mount("#app");
  
