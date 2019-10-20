<template>
  <div class="bm_extendedhigh">
    <v-container fluid>
      <v-checkbox @click.native="handleClick" dense v-model="selected" label="Extended High 1" value="Extended High 1"></v-checkbox>
      <v-checkbox @click.native="handleClick" dense v-model="selected" label="Extended High 2" value="Extended High 2"></v-checkbox>
      <v-checkbox @click.native="handleClick" dense v-model="selected" label="Extended High 3" value="Extended High 3"></v-checkbox>
      <v-checkbox @click.native="handleClick" dense v-model="selected" label="Extended High 4" value="Extended High 4"></v-checkbox>
      <v-checkbox @click.native="handleClick" dense v-model="selected" label="Extended High 5" value="Extended High 5"></v-checkbox>
      <v-checkbox @click.native="handleClick" dense v-model="selected" label="Extended High 6" value="Extended High 6"></v-checkbox>
    </v-container>
    <v-btn @click="toggleAll">{{toggleButtonName}}</v-btn>
  </div>
</template>

<script>

export default {
  name: 'BM_ExtendedHigh',
  components: {
  },
  data () {
    return {
      selected: this.$store.state.filterState.ExtendedHigh,
      toggleButtonName: "Select All",
    }
  },
  methods: {
    handleClick: function() {
      let filters = this.$store.state.filterState;
      filters.ExtendedHigh = this.selected
      this.$store.commit('assignFilters', filters)
      this.refreshMap();
    },
      toggleAll: function() {
      if(this.selected.length == 6) {
        this.selected = [];
        this.toggleButtonName = "Select All";
      } else {
        this.selected = ['Extended High 1', 'Extended High 2', 'Extended High 3', 'Extended High 4', 'Extended High 5', 'Extended High 6'];
        this.toggleButtonName = "Select None";
      }
      let filters = this.$store.state.filterState;
      filters.ExtendedHigh = this.selected
      this.$store.commit('assignFilters', filters)
      this.refreshMap();
    }
  }
};
</script>

<style scoped>
</style>