<template>
  <div id="app">
      <loading
        :loading="loadingActive"
      />
    <router-view/>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import loading from '@/components/loader.vue';

export default {
  name: 'App',
  components: {
    loading,
  },
  computed: {
    ...mapState({
      loadingActive: (state) => state.loadingActive,
    }),
  },
};
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
