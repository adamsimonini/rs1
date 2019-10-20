<template>
  <div class="bm_scn beam_mode_filter">
    <v-container fluid>
      <v-checkbox color="#193d8f" @click.native="handleClick" dense v-model="selected" label="ScanSAR Narrow A" value="ScanSAR Narrow A (W1 W2)"></v-checkbox>
      <v-checkbox color="#193d8f" @click.native="handleClick" dense v-model="selected" label="ScanSAR Narrow B" value="ScanSAR Narrow B (W2 S5 S6)"></v-checkbox>
    </v-container>
    <v-btn class="selectButton" @click="toggleAll" color="#193d8f">{{toggleButtonName}}</v-btn>
  </div>
</template>

<script>

export default {
  name: 'BM_Scn',
  components: {
  },
  data () {
    return {
      selected: this.$store.state.filterState.Scn,
      toggleButtonName: "Select All",
    }
  },
  methods: {
    handleClick: function() {
      let filters = this.$store.state.filterState;
      filters.Scn = this.selected
      this.$store.commit('assignFilters', filters)
      this.refreshMap();
    },
      toggleAll: function() {
      if(this.selected.length == 2) {
        this.selected = [];
        this.toggleButtonName = "Select All";
      } else {
        this.selected = ['ScanSAR Narrow A (W1 W2)', 'ScanSAR Narrow B (W2 S5 S6)'];
        this.toggleButtonName = "Select None";
      }
      let filters = this.$store.state.filterState;
      filters.Scn = this.selected
      this.$store.commit('assignFilters', filters)
      this.refreshMap();
    }
  }
};
</script>

<style scoped>
</style>