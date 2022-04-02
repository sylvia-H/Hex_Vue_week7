import { createApp } from 'vue';
import 'bootstrap';
import axios from 'axios';
import VueAxios from 'vue-axios';
import VueLoading from 'vue-loading-overlay';
import VueSweetalert2 from 'vue-sweetalert2';
import App from './App.vue';
import router from './router';
import { transferTime, transferToDate, toCurrency } from './methods/filters';

const app = createApp(App);
app.config.globalProperties.$filters = {
  transferTime,
  transferToDate,
  toCurrency,
};
app.use(router);
app.use(VueAxios, axios);
app.use(VueSweetalert2);
app.use(VueLoading);
app.mount('#app');
