import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import UI from '@/components/UI'

const app = createApp(App)

UI.forEach(UIcomponent => app.component(UIcomponent.name,UIcomponent))

app.use(store).use(router).mount('#app')
