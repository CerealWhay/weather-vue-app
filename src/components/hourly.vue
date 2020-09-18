<template>
  <div>
  {{hour_data.datetime}}: {{hour_data.temp}}
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
  },
};
</script>

<style lang="less" scoped>

</style>
