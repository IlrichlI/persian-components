import '../public/main.css'

export * from '../packages'

import { createApp } from 'vue'
import App from './App.vue'
import { PersianComponents } from '@/packages/PersianComponents'

const app = createApp(App)

app.use(PersianComponents)

app.mount('#app')
