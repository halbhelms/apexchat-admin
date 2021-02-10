import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import BaseButton from './components/UI/BaseButton.vue'
import BaseInput from './components/UI/BaseInput.vue'
import BaseCheckbox from './components/UI/BaseCheckbox.vue'
import SectionHeader from './components/UI/SectionHeader.vue'

const app = createApp(App)
  .use(store)
  .use(router)

app.component('base-button', BaseButton)
app.component('base-input', BaseInput)
app.component('base-checkbox', BaseCheckbox)
app.component('section-header', SectionHeader)

app.mount("#app");
  
