<template>
  <div class="home">
    <div class="container" v-if=WEATHER_DAILY_GETTER[0]>
      <div class="box is-desktop cont">
        <div class="grid container">
          <div class="city-date">
            <div class="city-name">
              {{ CITY_GETTER }}
            </div>
            <div class="date-value">
              {{ getTimeStampHome.getDate() }}
              {{ getMnth }}, {{ getWkDay }}
            </div>
          </div>
          <div class="img-temp-desc">
            <div class="image-cont">
              <img
                :src="require(`../assets/icons/${ WEATHER_NOW_GETTER.weather.icon }.png`)"
                :alt=WEATHER_NOW_GETTER.weather.description
              >
            </div>
            <div class="temp-desc">
              <div class="temp-value">
                {{ (WEATHER_NOW_GETTER.temp.toFixed(0)) }}°
              </div>
              <div class="weather-desc">
                {{ WEATHER_NOW_GETTER.weather.description }}
              </div>
            </div>
          </div>
          <div class="linebreak"></div>
          <div class="other-inf-cont">
            <div class="inf-block">
              <div class="inf-value">{{ (WEATHER_NOW_GETTER.app_temp).toFixed(0) }}°</div>
              <div class="inf-title">Ощущается</div>
            </div>
            <div class="inf-block">
              <div class="inf-value">
                <span class="wnd-dir">{{ WEATHER_NOW_GETTER.wind_cdir }}</span>
                {{ (WEATHER_NOW_GETTER.wind_spd).toFixed(1) }}<span class="spn">м/с</span>
              </div>
              <div class="inf-title">Ветер</div>
            </div>
            <div class="inf-block">
              <div class="inf-value">{{ getMaxMin.max_temp }}°</div>
              <div class="inf-title">Max</div>
            </div>
            <div class="inf-block">
              <div class="inf-value">{{ WEATHER_NOW_GETTER.clouds }}<span class="spn">%</span></div>
              <div class="inf-title">Облака</div>
            </div>
            <div class="inf-block">
              <div class="inf-value">
                {{ (WEATHER_NOW_GETTER.pres / 1.33333).toFixed(0) }}<span class="spn">
                  мм. рт. ст.</span>
              </div>
              <div class="inf-title">Давление</div>
            </div>
            <div class="inf-block">
              <div class="inf-value">{{ getMaxMin.min_temp }}°</div>
              <div class="inf-title">Min</div>
            </div>
          </div>
          <div class="linebreak2"></div>
          <div class="hourly-cont">
            <div class="hourly-title">
              Погода сегодня
            </div>
            <div class="hourly">
              <Hourly
                :hour_date="arrDates[i]"
                :hour_data="hour"
                v-for="(hour, i) of WEATHER_HOURLY_GETTER"
                :key="i"
              />
            </div>
          </div>
          <div class="daily-cont">
            <div class="daily-title">
              Погода на 5 дней
            </div>
            <div class="daily">
              <Daily
                :day_data="day"
                :monthNames="monthNames"
                :daysNames="daysNames"
                v-for="(day, i) of WEATHER_DAILY_GETTER"
                :key="i"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="footer-info">
        Данные от {{ WEATHER_NOW_GETTER.ob_time }} <br> weatherbit.io <br> dadata.com
      </div>
    </div>
      <div
        class="no-content"
        v-else
      >
        Введите город в поиск
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
      arrDates: [
        '3 часа',
        '6 часов',
        '9 часов',
        '12 часов',
        '15 часов',
        '18 часов',
        '21 час',
      ],
      daysNames: [
        'Воскресение',
        'Понедельник',
        'Вторник',
        'Среда',
        'Четверг',
        'Пятница',
        'Суббота',
      ],
      monthNames: [
        'Января',
        'Февраля',
        'Марта',
        'Апреля',
        'Мая',
        'Июня',
        'Июля',
        'Августа',
        'Сентября',
        'Октября',
        'Ноября',
        'Декабря',
      ],
    };
  },
  computed: {
    ...mapGetters([
      'CITY_GETTER',
      'WEATHER_NOW_GETTER',
      'WEATHER_HOURLY_GETTER',
      'WEATHER_DAILY_GETTER',
    ]),
    getTimeStampHome() {
      const date = new Date(Date.parse(this.$store.state.weather_daily[0].datetime));
      return date;
    },
    getMnth() {
      const mnth = this.monthNames[this.getTimeStampHome.getMonth()];
      return mnth;
    },
    getWkDay() {
      const day = this.daysNames[this.getTimeStampHome.getDay()];
      return day;
    },
    getMaxMin() {
      const maxMin = this.$store.state.weather_daily[0];
      return maxMin;
    },
  },
  watch: {
    CITY_GETTER() {
      this.$store.dispatch('GET_WEATHER');
    },
  },
  mounted() {
  },
};
</script>

<style lang="less" scoped>
.cont {
  margin-top: 25px;
  background: linear-gradient(to bottom, #4c58db, #8fb0e4);
  color: aliceblue;
  .grid {
    max-width: 1099px;
    display: grid;
    grid-template-rows: 100 1fr 1px 1fr 1fr;
    grid-template-columns: 1fr 1px 1fr;
    grid-gap: 30px;
    .city-date {
      grid-column: span 3;
      text-align: left;
      .city-name {
        font-size: 64px;
        line-height: 75px;
        font-family: RalewaySB;
      }
      .date-value {
        font-size: 32px;
        line-height: 42px;
      }
    }
    .img-temp-desc {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-self: center;
      .image-cont {
        align-self: center;
        justify-self: center;
        img {
          width: 100%;
        }
      }
      .temp-desc {
        .temp-value {
          font-size: 144px;
          line-height: 169px;
        }
        .weather-desc {
          font-family: Caveat;
          font-size: 36px;
        }
      }
    }
    .linebreak {
      background-color: #fff;
    }
    .linebreak2 {
      min-width: 100%;
      min-height: 1px;
      grid-column: span 3;
      background-color: rgba(255, 255, 255, 0.61);
    }
    .other-inf-cont {
      font-size: 36px;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: 1fr 1fr;
      .inf-block {
        text-align: left;
        .inf-value {
          font-family: RalewaySB;
          .wnd-dir {
            font-size: 20px;
          }
          .spn {
            font-size: 16px;
          }
        }
        .inf-title {
          font-size: 24px;
        }
      }
    }
    .hourly-cont {
      grid-column: span 3;
      .hourly-title {
        font-size: 36px;
        text-align: left;
        margin-bottom: 15px;
      }
      .hourly {
        display: grid;
        grid-gap: 28px;
        grid-template-columns: 133px 133px 133px 133px 133px 133px 133px;
      }
    }
    .daily-cont {
      grid-column: span 3;
      .daily-title {
        font-size: 36px;
        text-align: left;
        margin-bottom: 15px;
      }
      .daily {
      }
    }
  }
}
.footer-info {
  font-size: 18px;
  padding-bottom: 20px;
}
.no-content {
  margin-top: 20px;
  font-size: 40px;
  color: aliceblue;
}
</style>
