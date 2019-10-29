<template>
  <div class="toggle_extents">
    <v-row>
      <v-col cols="10" sm="10">
        <v-switch
          v-model="toggle"
          @change="this.updateExtentsVisibility"
          :label="`Image Extents: ${this.$store.state.showExtents ? 'on' : 'off'}`"
        ></v-switch>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "Toggle_Extents",
  components: {},
  data() {
    return {
      showExtents: this.$store.state.showExtents
    };
  },
  computed: {
    toggle: {
      get() {
        return this.$store.state.showExtents;
      },
      set() {
        this.$store.commit("toggleExtents");
      }
    }
  },
  methods: {}
};
</script>

<style scoped>
</style>