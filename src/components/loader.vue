<template>
<div
  id='wrapp'
>
    <b-progress
    v-show='loading'
    :active="loading"
    type="is-primary"
    background-opacity="0"
    id="main-loader"
  ></b-progress>
</div>
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
#wrapp {
  min-height: 3px;
}
#main-loader {
  height: 3px;
  top: 0 !important;
}
</style>
