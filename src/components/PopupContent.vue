<template>
  <div>
    <h3>{{feature.info.beamMode[randomBeam()]}}</h3>
    <p>Longitude: {{feature.info.lng}}</p>
    <p>Latitude: {{feature.info.lat}}</p>
    <!-- <v-btn color="#193d8f" max-height="20" class="interest_button" @click="popupClicked">Express Interest</v-btn> -->
  </div>
</template>
 
<script>
import Vue from 'vue';
export default Vue.extend({
  props: {
    feature: {
      required: false,
      info: Object,
    },
  },
  methods: {
    popupClicked() {
      alert('Your interest in this data has been received.')
    },
    randomBeam() {
      return Math.floor(Math.random() * 5);
    }
  },
})
</script>

<style>
  .interest_button {
    color: white !important;
  }
</style>