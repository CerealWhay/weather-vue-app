<template>
  <div class="home">
    <div class="container">
      <div class="box is-desktop grid subtitle">
        <div class="weather-img">
          <img
          :src="require(`../assets/icons/${ WEATHER_NOW_GETTER.weather.icon }.png`)"
          :alt=WEATHER_NOW_GETTER.weather.description
          >
        </div>
        <div class="city-temp">
          {{ CITY_GETTER }} <br>
          {{ WEATHER_NOW_GETTER.weather.description }}
        </div>
        <div class="city-temp">
          Температура: {{ WEATHER_NOW_GETTER.temp }} °C <br>
          Ощущается как: {{ WEATHER_NOW_GETTER.app_temp }} °C
        </div>
        <div class="inf-column">
          <div class="other-inf">
            <div class="v-key">Ветер:</div>
            <div
            class="v-value"
            >{{ WEATHER_NOW_GETTER.wind_cdir }}
            {{ (WEATHER_NOW_GETTER.wind_spd).toFixed(1) }} м/с</div>
          </div>
          <div class="other-inf">
            <div class="v-key">Видимость:</div>
            <div class="v-value">{{ WEATHER_NOW_GETTER.vis }} км</div>
          </div>
          <div class="other-inf">
            <div class="v-key">Облака:</div>
            <div class="v-value">{{ WEATHER_NOW_GETTER.clouds }} %</div>
          </div>
        </div>
        <div class="inf-column">
          <div class="other-inf">
            <div class="v-key">Осадки:</div>
            <div class="v-value">{{ (WEATHER_NOW_GETTER.precip).toFixed(1) }} мм</div>
          </div>
          <div class="other-inf">
            <div class="v-key">Осадки (снег):</div>
            <div class="v-value">{{ (WEATHER_NOW_GETTER.snow).toFixed(1) }} мм</div>
          </div>
          <div class="other-inf">
            <div class="v-key">Отн. влажность:</div>
            <div class="v-value">{{ WEATHER_NOW_GETTER.rh }} %</div>
          </div>
        </div>
        <div class="inf-column">
          <div class="other-inf">
            <div class="v-key">Восход солнца:</div>
            <div class="v-value">{{ WEATHER_NOW_GETTER.sunrise }}</div>
          </div>
          <div class="other-inf">
            <div class="v-key">Заход солнца:</div>
            <div class="v-value">{{ WEATHER_NOW_GETTER.sunset }}</div>
          </div>
          <div class="other-inf">
            <div class="v-key">Давление:</div>
            <div
              class="v-value"
            >{{ (WEATHER_NOW_GETTER.pres / 1.33333).toFixed(1) }} мм. рт. ст.</div>
          </div>
        </div>
      </div>
      <div class="foot-info">
        Данные от {{ WEATHER_NOW_GETTER.ob_time }} <br> weatherapi.com <br> dadata.com
      </div>
        <Hourly
          :hour_data="hour"
          v-for="(hour, i) of WEATHER_HOURLY_GETTER"
          :key="i"
        />
        <Daily
          :day_data="day"
          v-for="(day, i) of WEATHER_DAILY_GETTER"
          :key="i"
        />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Hourly from '../components/hourly.vue';
import Daily from '../components/daily.vue';

export default {
  name: 'Home',
  components: {
    Hourly,
    Daily,
  },
  data() {
    return {
    };
  },
  computed: {
    ...mapGetters([
      'CITY_GETTER',
      'WEATHER_NOW_GETTER',
      'WEATHER_HOURLY_GETTER',
      'WEATHER_DAILY_GETTER',
    ]),
  },
  watch: {
    CITY_GETTER() {
      this.$store.dispatch('GET_WEATHER_NOW');
      this.$store.dispatch('GET_WEATHER_HOURLY');
      this.$store.dispatch('GET_WEATHER_DAILY');
    },
  },
  mounted() {

  },
};
</script>

<style lang="less" scoped>
.grid {
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 2vw;
  background-color: #4481F4;
  color: aliceblue;
  .city-temp {
    grid-column: span 2;
    text-align: left;
  }
  .foot-info {
    grid-column: span 3;
  }
  .weather-img {
    grid-row: span 2;
  }
  .inf-column {
    border: 1px solid aliceblue;
    border-radius: 10px;
    .other-inf {
      text-align: left;
      display: grid;
      grid-template-columns: 1.5fr 1fr;
    }
  }
}
</style>
