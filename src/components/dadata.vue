<template>
  <div class="dadata">
    <dadata-suggestions
      :fullInfo.sync="myObjectFull"
      placeholder="Введите город..."
    />
  </div>
</template>

<script>

export default {
  name: 'Dadata',
  data() {
    return {
      myObjectFull: {},
    };
  },
  computed: {
    city() {
      return this.myObjectFull.data;
    },
  },
  methods: {
  },
  watch: {
    myObjectFull() {
      this.$store.commit('UPDATE_CITY', this.city);
    },
  },
};
</script>

<style>

</style>
