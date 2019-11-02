<template>
  <v-app>
    <FilterBar v-if="$store.state.drawer"></FilterBar>
    <v-app-bar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      app
      color="#193D8F"
      dark
    >
      <v-toolbar-title
        style="width: 300px; display: flex;"
        class=""
      >
        <v-app-bar-nav-icon  class="home-title" @click="handleToggle"></v-app-bar-nav-icon>
        <router-link  class="home-title" to="/">
          <h1>RADARSAT-1</h1>
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-content>
      <v-container
        fluid
        fill-height
        id="map_container"
      >
        <v-layout
          justify-center
        >
        <div id="content-container">
          <router-view></router-view>
        </div>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import FilterBar from '@/components/FilterBar.vue';
export default {
  name: 'App',
  props: {
    source: String,
  },
  components: {
    FilterBar,
  },
  data: () => ({
  }),
  methods: {
    handleToggle() {
    this.$store.commit('toggleDrawer');
    },
  }
};
</script>

<style>
.home-title{
  color: white !important;
  text-decoration: none;
  font-size: 14px;
}
.router-link-active{
    border-left: 2px solid #193D8F;
    padding-left: 10px;
}

a {
  text-decoration: none;
  color: black !important; 
}
#map_container {
  padding: 0 !important;
}
#content-container {
  width: 100%;
}
#map_container {
  padding-left: 0 !important;
}
.filter_category{ 
  border-left: 2px #193D8F solid;
  opacity: 0.8;
  margin-bottom: 10px;
}
.selectButton{
  color: white !important;
}
.v-list-item__title{
  color: black;
  font-size: 0.9rem !important;
}
.path {
  color: #193D8F;
}
.v-navigation-drawer__border {
  color: red;
}
.beam_mode_filter {
  padding-bottom: 10px;
  border-bottom: 1px solid #193D8F;
}
#map{
  width: 100% !important;
}
</style>