<template>
  <b-progress
    :active="loading"
    :color="color"
    background-opacity="0"
    id="main-loader"
  ></b-progress>
</template>

<script>
export default {
  name: 'loading',
  props: {
    loading: Boolean,
    color: String,
  },
};
</script>

<style scoped>
#main-loader {
  height: 3px;
  top: 0 !important;
  transform: scale(1, -1);
}
</style>
