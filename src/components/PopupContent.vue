<template>
  <div>
    <h3>{{feature.info.beamMode[randomBeam()]}}</h3>
    <p class="image-info"><b>ID: </b>rsat1_19980128_N5786W10910</p>
    <p class="image-info"><b>Pass Direction: </b>Descending</p>
    <p class="image-info"><b>Look Orientation: </b>Right</p>
    <p class="image-info"><b>Longitude: </b>{{feature.info.lng}}</p>
    <p class="image-info"><b>Latitude: </b>{{feature.info.lat}}</p>
    <p class="image-info"><b>Start Date: </b>1998-01-28T13:36:55+00:00</p>
    <p class="image-info"><b>End Date: </b>1998-01-28T13:37:12+00:00</p>
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
  .image-info {
    padding: 1px 0;
    margin-bottom: 0 !important;
  }
</style>