<template>
  <div class="bm_fine beam_mode_filter">
    <v-container fluid>
      <v-checkbox color="#193d8f" @click.native="handleClick" dense v-model="selected" label="Fine 1" value="Fine 1"></v-checkbox>
      <v-checkbox color="#193d8f" @click.native="handleClick" dense v-model="selected" label="Fine 2" value="Fine 2"></v-checkbox>
      <v-checkbox color="#193d8f" @click.native="handleClick" dense v-model="selected" label="Fine 3" value="Fine 3"></v-checkbox>
      <v-checkbox color="#193d8f" @click.native="handleClick" dense v-model="selected" label="Fine 4" value="Fine 4"></v-checkbox>
      <v-checkbox color="#193d8f" @click.native="handleClick" dense v-model="selected" label="Fine 5" value="Fine 5"></v-checkbox>
      <v-checkbox color="#193d8f" @click.native="handleClick" dense v-model="selected" label="Fine 6" value="Fine 6"></v-checkbox>
      <v-checkbox color="#193d8f" @click.native="handleClick" dense v-model="selected" label="Fine 7" value="Fine 7"></v-checkbox>
      <v-checkbox color="#193d8f" @click.native="handleClick" dense v-model="selected" label="Fine 8" value="Fine 8"></v-checkbox>
      <v-checkbox color="#193d8f" @click.native="handleClick" dense v-model="selected" label="Fine 9" value="Fine 9"></v-checkbox>
      <v-checkbox color="#193d8f" @click.native="handleClick" dense v-model="selected" label="Fine 10" value="Fine 10"></v-checkbox>
      <v-checkbox color="#193d8f" @click.native="handleClick" dense v-model="selected" label="Fine 11" value="Fine 11"></v-checkbox>
      <v-checkbox color="#193d8f" @click.native="handleClick" dense v-model="selected" label="Fine 12" value="Fine 12"></v-checkbox>
      <v-checkbox color="#193d8f" @click.native="handleClick" dense v-model="selected" label="Fine 13" value="Fine 13"></v-checkbox>
      <v-checkbox color="#193d8f" @click.native="handleClick" dense v-model="selected" label="Fine 14" value="Fine 14"></v-checkbox>
      <v-checkbox color="#193d8f" @click.native="handleClick" dense v-model="selected" label="Fine 15" value="Fine 15"></v-checkbox>
    </v-container>
    <v-btn class="selectButton" @click="toggleAll" color="#193d8f">{{toggleButtonName}}</v-btn>
  </div>
</template>

<script>

export default {
  name: 'BM_Fine',
  components: {
  },
  data () {
    return {
      selected: this.$store.state.filterState.Fine,
      toggleButtonName: "Select All",
    }
  },
  methods: {
    handleClick: function() {
      let filters = this.$store.state.filterState;
      filters.Fine = this.selected
      this.$store.commit('assignFilters', filters)
      this.refreshMap();
    },
    toggleAll: function() {
      if(this.selected.length == 15) {
        this.selected = [];
        this.toggleButtonName = "Select All";
      } else {
        this.selected = ['Fine 1', 'Fine 2', 'Fine 3', 'Fine 4', 'Fine 5', 'Fine 6', 'Fine 7','Fine 8', 'Fine 9', 'Fine 10', 'Fine 11', 'Fine 12', 'Fine 13', 'Fine 14', 'Fine 15'];
        this.toggleButtonName = "Select None";
      }
      let filters = this.$store.state.filterState;
      filters.Fine = this.selected
      this.$store.commit('assignFilters', filters)
      this.refreshMap();
    }
  }
};
</script>

<style scoped>
</style>