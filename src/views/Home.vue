<template>
  <div class="home">
    {{ WEATHER }} <br>
  <form @submit=addCity>
    <label>город</label>
    <input
      type="text"
      placeholder="Введите город"
      class="form-control"
      v-model="city"
      @keyup=addCity
    /><br>
  </form>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Home',
  data() {
    return {
      city: '',
    };
  },
  computed: {
    ...mapGetters(['WEATHER']),
  },
  methods: {
    addCity() {
      this.$store.dispatch('ADD_CITY_TO_STORE', this.city);
      this.$store.dispatch('GET_WEATHER');
    },
  },
  mounted() {
    this.$store.dispatch('GET_WEATHER');
  },
};
</script>
