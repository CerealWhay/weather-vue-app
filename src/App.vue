<template>
  <div id="app">
      <loading
        :loading="loadingActive"
      />
      <div class="container">
        <dadata />
      </div>
    <router-view/>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import loading from '@/components/loader.vue';
import dadata from '@/components/dadata.vue';

export default {
  name: 'App',
  components: {
    loading,
    dadata,
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
  @font-face {
  font-family: "Caveat";
  src: local("Caveat"),
   url(./assets/fonts/Caveat-Regular.ttf) format("truetype");
  }
  @font-face {
    font-family: "Raleway";
    src: local("Raleway"),
    url(./assets/fonts/Raleway-Regular.ttf) format("truetype");
  }
  @font-face {
    font-family: "RalewaySB";
    src: local("RalewaySB"),
    url(./assets/fonts/Raleway-SemiBold.ttf) format("truetype");
  }
  font-family: 'Raleway', Avenir, Helvetica, Arial, sans-serif;
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
