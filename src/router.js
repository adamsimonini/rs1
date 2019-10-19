import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Rs1Map from './components/Rs1Map.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/map',
      name: 'map',
      component: Rs1Map
    },
  ]
})
