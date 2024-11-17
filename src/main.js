import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import icons from '@/assets/icons'

const app = createApp(App)

icons.forEach(component => app.component(component.name,component))

app.use(store).use(router).mount('#app')
