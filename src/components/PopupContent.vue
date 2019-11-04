<template>
  <div>
    <h4 v-if="feature.info.multipleFeatures">{{feature.info.numFeatures}} features at this location. Sample feature shown.</h4>
    <h3>{{feature.info.properties.BEAM_MODEP}}</h3>
    <p class="image-info"><b>ID: </b>{{feature.info.properties.TITLEPrope}}</p>
    <p class="image-info"><b>Pass Direction: </b>{{feature.info.properties.ORBIT_DIRP}}</p>
    <p class="image-info"><b>Look Orientation: </b>{{feature.info.properties.LOOK_ORIEP}}</p>
    <p class="image-info"><b>Longitude: </b>{{feature.info.lng}}</p>
    <p class="image-info"><b>Latitude: </b>{{feature.info.lat}}</p>
    <p class="image-info"><b>Start Date: </b>{{feature.info.properties.DATEProper}}</p>
    <p class="image-info"><b>End Date: </b>{{feature.info.properties.END_DATEPr}}</p>
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
  methods: {},
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