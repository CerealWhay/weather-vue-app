<template>
  <div id="hrl">
    <div class="h-date">
      {{hour_date}}
    </div>
    <div class="h-img">
      <img
        :src="require(`../assets/icons/${ hour_data.weather.icon }.png`)"
        :alt=hour_data.weather.description
      >
    </div>
    <div
      class="h-pop"
      v-if="hour_data.pop"
    >
      {{hour_data.pop}}%
    </div>
    <div
      class="h-pop"
      v-else
    >
      --
    </div>
    <div class="h-temp">
      {{hour_data.temp.toFixed(0)}}°
    </div>
  </div>
</template>

<script>
export default {
  name: 'Hourly',
  props: {
    hour_data: {
      type: Object,
      required: true,
    },
    hour_date: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="less" scoped>
#hrl {
  background-color: #376cce;
  display: inline-block;
  border-radius: 5px;
  box-shadow: 5px 5px 7px rgba(0,0,0,0.2);
  .h-date {
    font-size: 20px;
    line-height: 34px;
  }
  .h-img {
    img {
      width: 75px;
    }
  }
  .h-pop {
    font-size: 16px;
  }
  .h-temp {
    font-size: 28px;
    margin-bottom: 5px;
  }
}
</style>
