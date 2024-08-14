import 'bootstrap/dist/css/bootstrap-utilities.min.css'
import 'bootstrap/dist/css/bootstrap-grid.min.css'
import 'bootstrap/dist/css/bootstrap-reboot.min.css'
import './assets/main.css'
import 'primeicons/primeicons.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'
import App from './App.vue'
import router from './router'
import ConfirmationService from 'primevue/confirmationservice';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import { vMaska } from "maska/vue"
import sidebar from './js/sidebar'

const app = createApp(App)

app.use(PrimeVue, {
  theme: {
    preset: Aura
  }
})

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

app.directive('maska', vMaska)
app.use(ConfirmationService)
app.use(pinia)
app.use(router)
app.use(sidebar)

app.mount('#app')
