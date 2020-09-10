import Vue from 'vue';
import Vuex from 'vuex';
import consts from '../constants';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    weather: {},
    city: '',
    geo_lat: '',
    geo_lon: '',
  },
  mutations: {
    UPDATE_WEATHER(state, weather) {
      state.weather = weather;
    },
    UPDATE_CITY(state, recievedCity) {
      state.city = recievedCity.city;
      state.geo_lat = recievedCity.geo_lat;
      state.geo_lon = recievedCity.geo_lon;
    },
  },
  actions: {
    GET_WEATHER(context) {
      return new Promise((resolve) => {
        Vue.axios.get(`/current?lat=${this.state.geo_lat}&lon=${this.state.geo_lon}&key=${consts.API_KEY}`)
          .then((response) => {
            context.commit('UPDATE_WEATHER', response.data);
            resolve(response.data);
          })
          .catch((error) => {
            console.log(error);
            console.log('ЧТО ТО ПОШЛО НЕ ТАК');
            return error;
          });
      });
    },
  },
  getters: {
    WEATHER_GETTER: (state) => state.weather,
    CITY_GETTER: (state) => state.city,
  },
  modules: {
  },
});
