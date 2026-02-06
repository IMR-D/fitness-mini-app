// src/main.js
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import './style.css';
import App from './App.vue';
import { setupMockTelegramWebApp } from './mocks/mockTelegramWebApp';

if (import.meta.env.DEV) {
  setupMockTelegramWebApp();
}

const app = createApp(App);
app.use(createPinia());
app.mount('#app');