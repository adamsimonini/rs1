<template>
  <div class="bm_extendedlow beam_mode_filter">
    <v-container fluid>
      <v-checkbox color="#193d8f" @click.native="handleClick" dense v-model="selected" label="Extended Low 1" value="Low Incidence 1"></v-checkbox>
    </v-container>
    <v-btn class="selectButton" @click="toggleAll" color="#193d8f">{{toggleButtonName}}</v-btn>
  </div>
</template>

<script>

export default {
  name: 'BM_ExtendedLow',
  components: {
  },
  data () {
    return {
      selected: this.$store.state.filterState.ExtendedLow,
      toggleButtonName: "Select All",
    }
  },
  methods: {
    handleClick: function() {
      let filters = this.$store.state.filterState;
      filters.ExtendedLow = this.selected
      this.$store.commit('assignFilters', filters)
      this.refreshMap();
    },
      toggleAll: function() {
      if(this.selected.length == 1) {
        this.selected = [];
        this.toggleButtonName = "Select All";
      } else {
        this.selected = ['Low Incidence 1'];
        this.toggleButtonName = "Select None";
      }
      let filters = this.$store.state.filterState;
      filters.ExtendedLow = this.selected
      this.$store.commit('assignFilters', filters)
      this.refreshMap();
    }
  }
};
</script>

<style scoped>
</style>