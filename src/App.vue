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

#content-container {
  padding-left: 20px;
  width: 100%;
}
.v-list-group:nth-of-type(2){ 
  border-top: 2px green solid;
}

.v-list-item__title{
  color: black;
  font-size: 0.9rem !important;
}

a {
    color: #2E7D32 !important;
}
.path {
  color: #193D8F;
}
</style>