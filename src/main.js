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

new Vue({
  store,
  router,
  vuetify: new Vuetify(opts),
  render: h => h(App)
}).$mount("#app");
