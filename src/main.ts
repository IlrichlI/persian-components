import { createApp } from 'vue'
import '../public/main.css'
import { PersianComponents } from '../packages'
import App from './App.vue'

export * from '../packages'

if (import.meta.env.VITE_DEVELOP) {
  const app = createApp(App)
  app.use(PersianComponents)
  app.mount('#app')
}
