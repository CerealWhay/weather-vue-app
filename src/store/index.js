import Vue from 'vue';
import Vuex from 'vuex';
import consts from '../constants';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    weather_now_api: {},
    weather_now_django: {},
    city: '',
    geo_lat: '',
    geo_lon: '',
    loadingActive: false,
  },
  mutations: {
    START_LOADING(state) {
      state.loadingActive = true;
    },
    STOP_LOADING(state) {
      state.loadingActive = false;
    },
    UPDATE_WEATHER_NOW_API(state, weatherNow) {
      state.weather_now_api = weatherNow;
    },
    UPDATE_WEATHER_NOW_DJANGO(state, weatherNow) {
      state.weather_now_django = weatherNow;
    },
    UPDATE_CITY(state, recievedCity) {
      state.city = recievedCity.city;
      state.geo_lat = recievedCity.geo_lat;
      state.geo_lon = recievedCity.geo_lon;
    },
  },
  actions: {
    async GET_WEATHER(context) {
      context.commit('START_LOADING');
      await context.dispatch('GET_WEATHER_NOW_API');
      await context.dispatch('GET_WEATHER_NOW_DJANGO');
      context.commit('STOP_LOADING');
    },
    GET_WEATHER_NOW_API(context) {
      return new Promise((resolve) => {
        Vue.axios.get(`/current?lat=${this.state.geo_lat}&lon=${this.state.geo_lon}&key=${consts.API_KEY}`)
          .then((response) => {
            context.commit('UPDATE_WEATHER_NOW_API', response.data.data[0]);
            resolve(response.data);
          })
          .catch((error) => {
            console.log(error);
            console.log('ЧТО ТО ПОШЛО НЕ ТАК now');
            return error;
          });
      });
    },
    GET_WEATHER_NOW_DJANGO(context) {
      return new Promise((resolve) => {
        Vue.axios.get(`http://127.0.0.1:8000/descriptions/resp/?city=${this.state.city}&format=json`)
          .then((response) => {
            context.commit('UPDATE_WEATHER_NOW_DJANGO', response.data);
            resolve(response.data);
          })
          .catch((error) => {
            console.log(error);
            console.log('ЧТО ТО ПОШЛО НЕ ТАК now');
            return error;
          });
      });
    },
  },
  getters: {
    WEATHER_NOW_API_GETTER: (state) => state.weather_now_api,
    WEATHER_NOW_DJANGO_GETTER: (state) => state.weather_now_django,
    CITY_GETTER: (state) => state.city,
  },
  modules: {
  },
});
