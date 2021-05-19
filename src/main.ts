import './assets/tailwind.css';
import vSelect from 'vue-select';
import 'vue-select/dist/vue-select.css';
import { createApp } from 'vue';
import App from './App.vue';

const app = createApp(App);

app.component('v-select', vSelect);
app.mount('#app');
