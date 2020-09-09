import Vue from 'vue';
import Vuex from 'vuex';
import consts from '../constants';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    weather: {},
    city: 'moscow',
  },
  mutations: {
    UPDATE_WEATHER(state, weather) {
      state.weather = weather;
    },
    UPDATE_CITY(state, city) {
      state.city = city;
    },
  },
  actions: {
    GET_WEATHER(context) {
      return new Promise((resolve) => {
        Vue.axios.get(`/current?city=${this.state.city}&country=russia&key=${consts.API_KEY}`)
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
    ADD_CITY_TO_STORE(context, city) {
      context.commit('UPDATE_CITY', city);
    },
  },
  getters: {
    WEATHER: (state) => state.weather,
  },
  modules: {
  },
});
