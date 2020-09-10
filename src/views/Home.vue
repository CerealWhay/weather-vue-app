<template>
  <div class="home">
    <dadata
    />
    ГОРОД: {{ CITY_GETTER }} <br>
    <button v-on:click=click>ПОКАЖИ ПОГОДУ</button> <br>
    {{ WEATHER_GETTER }} <br><br><br>
    <img src="../assets/ali.jpeg" alt="">
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import dadata from '@/components/dadata.vue';

export default {
  name: 'Home',
  components: {
    dadata,
  },
  data() {
    return {
    };
  },
  methods: {
    click() {
      this.$store.dispatch('GET_WEATHER');
    },
  },
  computed: {
    ...mapGetters(['WEATHER_GETTER', 'CITY_GETTER']),
  },
  mounted() {

  },
};
</script>

<style scoped>

</style>
