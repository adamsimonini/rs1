import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    drawer: true,
    filterState: {
      Scn: ['ScanSAR Narrow A (W1 W2)', 'ScanSAR Narrow B (W2 S5 S6)'],
      ExtendedHigh: ['Extended High 1', 'Extended High 2', 'Extended High 3', 'Extended High 4', 'Extended High 5', 'Extended High 6'],
      ExtendedLow: ['Low Incidence 1'],
      Standard: ['Standard 1', 'Standard 2', 'Standard 3', 'Standard 4', 'Standard 5', 'Standard 6', 'Standard 7'],
      Fine: ['Fine 1', 'Fine 2', 'Fine 3', 'Fine 4', 'Fine 5', 'Fine 6', 'Fine 7', 'Fine 8', 'Fine 9', 'Fine 10', 'Fine 11', 'Fine 12', 'Fine 13', 'Fine 14', 'Fine 15']
    },
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
