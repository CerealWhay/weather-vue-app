<template>
  <div id="app">
      <loading
        :loading="loadingActive"
      />
      <div class="container asd">
        <div class="app-title container">
          Weather vue app
        </div>
        <div class="app-dadata container">
          <dadata />
        </div>
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
  .asd {
    .app-title {
    margin-top: 25px;
    margin-bottom: 25px;
    font-family: Caveat;
    font-size: 80px;
    color: aliceblue;
    border-radius: 15px;
    max-width: 500px;
  }
  .app-dadata {
    max-width: 500px;
  }
  }
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
  -moz-user-select: none;
  -khtml-user-select: none;
  user-select: none;
  background: linear-gradient(to bottom, #8791ff, #e6f0ff);
  min-height: 100vh;
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
