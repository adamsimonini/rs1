<template>
  <div class="bm_fine">
    <v-container fluid>
      <p v-show=this.selected[0]>{{ selected }}</p>
      <v-checkbox dense v-model="selected" label="Fine 1" value="F1"></v-checkbox>
      <v-checkbox dense v-model="selected" label="Fine 2" value="F2"></v-checkbox>
      <v-checkbox dense v-model="selected" label="Fine 3" value="F3"></v-checkbox>
      <v-checkbox dense v-model="selected" label="Fine 4" value="F4"></v-checkbox>
      <v-checkbox dense v-model="selected" label="Fine 5" value="F5"></v-checkbox>
      <v-checkbox dense v-model="selected" label="Fine 6" value="F6"></v-checkbox>
      <v-checkbox dense v-model="selected" label="Fine 7" value="F7"></v-checkbox>
      <v-checkbox dense v-model="selected" label="Fine 8" value="F8"></v-checkbox>
      <v-checkbox dense v-model="selected" label="Fine 9" value="F9"></v-checkbox>
      <v-checkbox dense v-model="selected" label="Fine 10" value="F10"></v-checkbox>
      <v-checkbox dense v-model="selected" label="Fine 11" value="F11"></v-checkbox>
      <v-checkbox dense v-model="selected" label="Fine 12" value="F12"></v-checkbox>
      <v-checkbox dense v-model="selected" label="Fine 13" value="F13"></v-checkbox>
      <v-checkbox dense v-model="selected" label="Fine 14" value="F14"></v-checkbox>
      <v-checkbox dense v-model="selected" label="Fine 15" value="F15"></v-checkbox>
    </v-container>
    <v-btn @click="toggleAll">{{toggleButtonName}}</v-btn>
  </div>
</template>

<script>

export default {
  name: 'BM_Fine',
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
      if(this.selected.length == 15) {
        this.selected = [];
        this.toggleButtonName = "Select All";
      } else {
        this.selected = ['F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7','F8', 'F9', 'F10', 'F11', 'F12', 'F13', 'F14', 'F15'];
        this.toggleButtonName = "Select None";
      }
    }
  }
};
</script>

<style scoped>
</style>