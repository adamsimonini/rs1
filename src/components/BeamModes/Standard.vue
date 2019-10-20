<template>
  <div class="checkbox">
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
    <v-btn @click="toggleAll">Toggle All</v-btn>
  </div>
</template>

<script>

export default {
  name: 'Checkbox',
  components: {
  },
  data () {
    return {
      selected: [],
    }
  },
  methods: {
    toggleAll: function() {
      if(this.selected.length == 7) {
        this.selected = [];
      } else {
        this.selected = ['S1', 'S2', 'S3', 'S4', 'S5', 'S6', 'S7'];
      }
    }
  }
};
</script>

<style scoped>
</style>