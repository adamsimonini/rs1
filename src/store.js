import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    drawer: true,
    filterState: {},
    the_map: {},
    centroidsApiUrl: "https://spa2019-admin.deploy.solutions/api/centroids",
    footprintsApiUrl: "https://spa2019-admin.deploy.solutions/api/footprints"
  },
  mutations: {
    toggleDrawer(state) {
      state.drawer ? state.drawer = false : state.drawer = true;
    },
    assignMap(state, map) {
      state.the_map = map;
    },
    assignFilters(state, filters) {
      state.filterState = filters
    }

  },
  actions: {

}
})
