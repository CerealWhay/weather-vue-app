<template>
  <div>
    <!-- {{day_data.pop}} -->

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

</style>
