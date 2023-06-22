import { createApp } from 'vue';
import App from './App.vue';
import '../public/main.css';

export * from './JalaaliDatePicker';

const app = createApp(App);


app.mount('#app');