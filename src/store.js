import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    drawer: true,
    the_map: {},
  },
  mutations: {
    toggleDrawer(state) {
      state.drawer ? state.drawer = false : state.drawer = true;
    },
    assignMap(state, map) {
      state.the_map = map;
    }

  },
  actions: {

}
})
