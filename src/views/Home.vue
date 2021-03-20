<template>
  <div class="home">
    <div class="container">
      <div class="box is-desktop cont">
        <div class="grid container">
          <div class="city-date">
            <div class="city-name">
              {{ CITY_GETTER }}
            </div>
            <div class="date-value">
              {{ WEATHER_NOW_DJANGO_GETTER.time }}
            </div>
          </div>
          <div class="img-temp-desc">
            <div class="image-cont">
              <img
                :src="require(`../assets/icons/${ WEATHER_NOW_API_GETTER.weather.icon }.png`)"
                :alt=WEATHER_NOW_API_GETTER.weather.description
              >
            </div>
            <div class="temp-desc">
              <div class="temp-value">
                {{ WEATHER_NOW_DJANGO_GETTER.temperature }}
              </div>
              <div class="weather-desc">
                {{ WEATHER_NOW_DJANGO_GETTER.weather_desc }}
              </div>
            </div>
          </div>
          <div class="linebreak"></div>
          <div class="other-inf-cont">
            <div class="inf-block">
              <div class="inf-value">{{ (WEATHER_NOW_API_GETTER.app_temp) }}°</div>
              <div class="inf-title">Ощущается</div>
            </div>
            <div class="inf-block">
              <div class="inf-value">
                {{ (WEATHER_NOW_DJANGO_GETTER.wind) }}
              </div>
              <div class="inf-title">Ветер</div>
            </div>
            <div class="inf-block">
              <!-- <div class="inf-value">{{ getMaxMin.max_temp }}°</div> -->
              <!-- <div class="inf-title">Max</div> -->
            </div>
            <div class="inf-block">
              <div class="inf-value">{{ WEATHER_NOW_DJANGO_GETTER.probOfPrecip }}</div>
              <div class="inf-title">Вер. осадков</div>
            </div>
            <div class="inf-block">
              <div class="inf-value">
                {{ WEATHER_NOW_DJANGO_GETTER.wet }}
              </div>
              <div class="inf-title">Влажность</div>
            </div>
            <div class="inf-block">
              <!-- <div class="inf-value">{{ getMaxMin.min_temp }}°</div> -->
              <!-- <div class="inf-title">Min</div> -->
            </div>
          </div>
        </div>
      </div>
      <div class="footer-info">
        Данные от {{ WEATHER_NOW_API_GETTER.ob_time }} <br> weatherbit.io <br> dadata.com
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Home',
  components: {
  },
  computed: {
    ...mapGetters([
      'CITY_GETTER',
      'WEATHER_NOW_API_GETTER',
      'WEATHER_NOW_DJANGO_GETTER',
    ]),
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
