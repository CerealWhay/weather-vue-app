<template>
  <div id="dayl">
    <!-- {{day_data.datetime}} -->
    <div class="col d-date">
      {{day_data.datetime}}
    </div>
    <div class="col d-img">
      <img
        :src="require(`../assets/icons/${ day_data.weather.icon }.png`)"
        :alt=day_data.weather.description
      >
    </div>
    <div class="col d-min">
      <div class="d-val">
        {{day_data.min_temp.toFixed(0)}}°
      </div>
      <div class="d-title">
        Min
      </div>
    </div>
    <div class="col d-max">
      <div class="d-val">
        {{day_data.max_temp.toFixed(0)}}°
      </div>
      <div class="d-title">
        Max
      </div>
    </div>
    <div class="col d-pop">
      <div class="d-val">
        {{day_data.pop}}<span class="d-spn">%</span>
      </div>
      <div class="d-title">
        Вер. дождя
      </div>
    </div>
    <div class="col d-wind">
      <div class="d-val">
        <span class="d-w-cdir">
          {{day_data.wind_cdir}}
        </span>
        {{day_data.wind_spd.toFixed(1)}}<span class="d-spn">м/с</span>
      </div>
      <div class="d-title">
        Ветер
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Daily',
  props: {
    day_data: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="less" scoped>
#dayl {
  display: grid;
  grid-template-columns: 300px 120px 1fr 1fr 1fr 1fr;
  background-color: #194AA3;
  border-radius: 5px;
  box-shadow: 5px 5px 7px rgba(0,0,0,0.2);
  margin-bottom: 30px;
  .col {
    align-self: center;
    justify-self: center;
    .d-val {
      text-align: left;
      font-family: RalewaySB;
      font-size: 36px;
    }
    .d-title {
      text-align: left;
      font-size: 18px;
    }
  }
  .d-date {
    font-size: 32px;
  }
  .d-w-cdir {
    font-size: 28px;
  }
  .d-spn {
    font-size: 16px;
  }
}
</style>
