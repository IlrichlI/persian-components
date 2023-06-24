import '../public/main.css'

export * from '../packages'

import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

app.mount('#app')
