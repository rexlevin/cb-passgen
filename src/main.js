import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createDiscreteApi } from 'naive-ui';

const { message } = createDiscreteApi(['message']);

const app = createApp(App);

app.use(router);
app.mount('#app');