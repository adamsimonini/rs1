<template>
  <div class="bm_standard">
    <v-container fluid>
      <v-checkbox @click.native="handleClick" dense v-model="selected" label="Standard 1" value="Standard 1"></v-checkbox>
      <v-checkbox @click.native="handleClick" dense v-model="selected" label="Standard 2" value="Standard 2"></v-checkbox>
      <v-checkbox @click.native="handleClick" dense v-model="selected" label="Standard 3" value="Standard 3"></v-checkbox>
      <v-checkbox @click.native="handleClick" dense v-model="selected" label="Standard 4" value="Standard 4"></v-checkbox>
      <v-checkbox @click.native="handleClick" dense v-model="selected" label="Standard 5" value="Standard 5"></v-checkbox>
      <v-checkbox @click.native="handleClick" dense v-model="selected" label="Standard 6" value="Standard 6"></v-checkbox>
      <v-checkbox @click.native="handleClick" dense v-model="selected" label="Standard 7" value="Standard 7"></v-checkbox>
    </v-container>
    <v-btn class="selectButton" @click="toggleAll" color="#193d8f">{{toggleButtonName}}</v-btn>
  </div>
</template>

<script>

export default {
  name: 'BM_Standard',
  components: {
  },
  data () {
    return {
      selected: this.$store.state.filterState.Standard,
      toggleButtonName: "Select All",
    }
  },
  methods: {
    handleClick: function() {
      let filters = this.$store.state.filterState;
      filters.Standard = this.selected
      this.$store.commit('assignFilters', filters)
      this.refreshMap();
    },
      toggleAll: function() {
      if(this.selected.length == 7) {
        this.selected = [];
        this.toggleButtonName = "Select All";
      } else {
        this.selected = ['Standard 1', 'Standard 2', 'Standard 3', 'Standard 4', 'Standard 5', 'Standard 6', 'Standard 7'];
        this.toggleButtonName = "Select None";
      }
      let filters = this.$store.state.filterState;
      filters.Standard = this.selected
      this.$store.commit('assignFilters', filters)
      this.refreshMap();
    }
  }
};
</script>

<style scoped>
  .selectButton{
    color: white !important;
  }
</style>