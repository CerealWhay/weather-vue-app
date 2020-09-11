import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import DadataSuggestions from 'vue-dadata-suggestions';
import Buefy from 'buefy';
import App from './App.vue';
import router from './router';
import store from './store';
import consts from './constants';
import 'buefy/dist/buefy.css';

Vue.config.productionTip = false;

Vue.use(Buefy);

Vue.use(DadataSuggestions, {
  token: 'a55ecb3c0d23c600b96911e33aff5d4af577b95f',
  type: 'ADDRESS',
  constraints: {
    locations: { country: '*' },
  },
  geoLocation: false,
  bounds: 'city',
});

Vue.use(VueAxios, axios);
Vue.axios.defaults.baseURL = consts.VUE_APP_BACKEND_DOMAIN;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
