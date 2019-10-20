<template>
  <div class="bm_standard">
    <v-container fluid>
      <p v-show=this.selected[0]>{{ selected }}</p>
      <v-checkbox dense v-model="selected" label="Standard 1" value="S1"></v-checkbox>
      <v-checkbox dense v-model="selected" label="Standard 2" value="S2"></v-checkbox>
      <v-checkbox dense v-model="selected" label="Standard 3" value="S3"></v-checkbox>
      <v-checkbox dense v-model="selected" label="Standard 4" value="S4"></v-checkbox>
      <v-checkbox dense v-model="selected" label="Standard 5" value="S5"></v-checkbox>
      <v-checkbox dense v-model="selected" label="Standard 6" value="S6"></v-checkbox>
      <v-checkbox dense v-model="selected" label="Standard 7" value="S7"></v-checkbox>
    </v-container>
    <v-btn @click="toggleAll">{{toggleButtonName}}</v-btn>
  </div>
</template>

<script>

export default {
  name: 'BM_Standard',
  components: {
  },
  data () {
    return {
      selected: [],
      toggleButtonName: "Select All",
    }
  },
  methods: {
    toggleAll: function() {
      if(this.selected.length == 7) {
        this.selected = [];
        this.toggleButtonName = "Select All";
      } else {
        this.selected = ['S1', 'S2', 'S3', 'S4', 'S5', 'S6', 'S7'];
        this.toggleButtonName = "Select None";
      }
    }
  }
};
</script>

<style scoped>
</style>