import Vue from "vue";
import App from "./App.vue";
import router from './router'
import store from './store'
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.config.productionTip = false

const opts = {
  icons: {
    iconfont: 'mdi',
  },
};
Vue.use(Vuetify);
Vue.mixin({
  methods: {
    buildQueryObject: function (filters) {

      let queryFilterObject = {beam_modep:[]}
      for (var key in filters) {
        if (filters.hasOwnProperty(key)) {
          console.log(key + " -> " + filters[key]);
          queryFilterObject.beam_modep = queryFilterObject.beam_modep.concat(filters[key])
        }
      }
      return "beam_modep=" + queryFilterObject.beam_modep.join(',')
    },
    buildCentroidsUrl: function (filters) {
      let baseUrl = this.$store.state.centroidsApiUrl
      let queryObjectString = this.buildQueryObject(filters)
      let url = baseUrl + "?" + queryObjectString
      console.log('centroids:' + url)
      return url
    },
    buildFootprintsUrl: function (filters) {
      let baseUrl = this.$store.state.footprintsApiUrl
      let queryObjectString = this.buildQueryObject(filters)
      let url = baseUrl + "?" + queryObjectString
      console.log('footprints:' + url)
      return url
    },
    refreshMap: function () {

      let map = this.$store.state.the_map
      let filters = this.$store.state.filterState
      let updatedCentroidsUrl = this.buildCentroidsUrl(filters)
      console.log('refreshing centroids with data from ' + updatedCentroidsUrl)
      map.getSource('rs1-centroids').setData(updatedCentroidsUrl)

      let updatedFootprintsUrl = this.buildFootprintsUrl(filters)
      console.log('refreshing footprints with data from ' + updatedFootprintsUrl)
      map.getSource('rs1-extents').setData(updatedFootprintsUrl)
    },
    updateExtentsVisibility: function() {
      let map = this.$store.state.the_map
      if (this.$store.state.showExtents){
        map.setLayoutProperty('rs1-extents-layer', 'visibility', 'visible');
      } else {
        map.setLayoutProperty('rs1-extents-layer', 'visibility', 'none');
      }
    }
  }
})
new Vue({
  store,
  router,
  vuetify: new Vuetify(opts),
  render: h => h(App)
}).$mount("#app");
