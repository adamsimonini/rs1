<template>
    <div class="mapbox-css">
        <MglMap 
            :accessToken="accessToken" 
            :mapStyle="mapStyle" 
            @load="loaded"
        >
            <MglNavigationControl position="top-right" />
        </MglMap>
    </div>
</template>

<script>
import Mapbox from "mapbox-gl";
import { MglMap } from "vue-mapbox";


export default {
  components: {
    MglMap
  },
  data() {
    return {
      accessToken: "pk.eyJ1Ijoia3Jiam9uZXMiLCJhIjoiYjZiM2UxZDYyYWQ0MmI0ZWY4ZDU0ZTAxMmRhNjIxMWEifQ.W29Ph-YqccKz7_pfVAd2qw", // your access token. Needed if you using Mapbox maps
      mapStyle: "mapbox://styles/mapbox/streets-v11",
    };
  },
  methods: {
    loaded(map) {
        console.log(map) 
    }
  },
  created() {
    // We need to set mapbox-gl library here in order to use it in template
    this.mapbox = Mapbox;
  }
};
</script>

<style scoped>
.mapbox-css {
    width: 100%;
    height: 88vh;
}
.mapboxgl-canvas {
    width: 100% !important;
}
</style>