import { createApp } from 'vue';
import App from './App.vue';
import './index.css';
import router from '@/routes';

import { createPinia } from 'pinia';

const app = createApp(App);
app.use(router);
const pinia = createPinia();
app.use(pinia);
app.mount('#app');
