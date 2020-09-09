import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import App from './App.vue';
import router from './router';
import store from './store';
import consts from './constants';

Vue.config.productionTip = false;

Vue.use(VueAxios, axios);
Vue.axios.defaults.baseURL = consts.VUE_APP_BACKEND_DOMAIN;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');