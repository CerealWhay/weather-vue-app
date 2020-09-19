import Vue from 'vue';
import Vuex from 'vuex';
import consts from '../constants';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    weather_now: {},
    weather_hourly: {},
    weather_daily: {},
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
    UPDATE_WEATHER_NOW(state, weatherNow) {
      state.weather_now = weatherNow;
    },
    UPDATE_WEATHER_HOURLY(state, weatherHourly) {
      state.weather_hourly = weatherHourly;
    },
    UPDATE_WEATHER_DAILY(state, weatherDaily) {
      state.weather_daily = weatherDaily;
    },
    UPDATE_CITY(state, recievedCity) {
      state.city = recievedCity.city;
      state.geo_lat = recievedCity.geo_lat;
      state.geo_lon = recievedCity.geo_lon;
    },
  },
  actions: {
    GET_WEATHER_NOW(context) {
      context.commit('START_LOADING');
      return new Promise((resolve) => {
        Vue.axios.get(`/current?lat=${this.state.geo_lat}&lon=${this.state.geo_lon}&key=${consts.API_KEY}`)
          .then((response) => {
            context.commit('UPDATE_WEATHER_NOW', response.data.data[0]);
            resolve(response.data);
          })
          .catch((error) => {
            console.log(error);
            console.log('ЧТО ТО ПОШЛО НЕ ТАК');
            context.commit('STOP_LOADING');
            return error;
          });
      });
    },
    GET_WEATHER_HOURLY(context) {
      return new Promise((resolve) => {
        Vue.axios.get(`forecast/hourly?lat=${this.state.geo_lat}&lon=${this.state.geo_lon}&key=${consts.API_KEY}&hours=24`)
          .then((response) => {
            context.commit('UPDATE_WEATHER_HOURLY', response.data.data);
            resolve(response.data);
          })
          .catch((error) => {
            console.log(error);
            console.log('ЧТО ТО ПОШЛО НЕ ТАК');
            context.commit('STOP_LOADING');
            return error;
          });
      });
    },
    GET_WEATHER_DAILY(context) {
      return new Promise((resolve) => {
        Vue.axios.get(`forecast/daily?lat=${this.state.geo_lat}&lon=${this.state.geo_lon}&key=${consts.API_KEY}&hours=24`)
          .then((response) => {
            context.commit('UPDATE_WEATHER_DAILY', response.data.data);
            resolve(response.data);
            context.commit('STOP_LOADING');
          })
          .catch((error) => {
            console.log(error);
            console.log('ЧТО ТО ПОШЛО НЕ ТАК');
            context.commit('STOP_LOADING');
            return error;
          });
      });
    },
  },
  getters: {
    WEATHER_NOW_GETTER: (state) => state.weather_now,
    WEATHER_HOURLY_GETTER: (state) => state.weather_hourly,
    WEATHER_DAILY_GETTER: (state) => state.weather_daily,
    CITY_GETTER: (state) => state.city,
  },
  modules: {
  },
});
