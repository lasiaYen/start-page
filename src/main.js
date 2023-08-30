import { createApp } from 'vue';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
import App from './App.vue';
import router from './router';
import 'qweather-icons/font/qweather-icons.css';

const app = createApp(App);

app.use(router).mount('#app');

// eslint-disable-next-line no-restricted-syntax
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
