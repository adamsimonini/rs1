<template>
  <v-app>
  <v-navigation-drawer
      v-model="drawer"
      :clipped="$vuetify.breakpoint.lgAndUp"
      app
    >
      <v-list dense>
        <template v-for="item in items">
          <v-layout
            v-if="item.heading"
            :key="item.heading"
            align-center
          >
          </v-layout>
          <v-list-group
            v-else-if="item.children"
            :key="item.text"
            v-model="item.model"
            :prepend-icon="item.model ? item.icon : item['icon-alt']"
            append-icon=""
          >
            <template v-slot:activator>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>
                    {{ item.text }}
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </template>
            <v-list-item
              v-for="(child, i) in item.children"
              :key="i"
            >
              <router-link :to=child.route>
                <v-list-item-action v-if="child.icon">
                  <v-icon>{{ child.icon }}</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title>
                    {{ child.text }}
                  </v-list-item-title>
                </v-list-item-content>
              </router-link>
            </v-list-item>
          </v-list-group>
          <v-list-item
            v-else
            :key="item.text"
          >
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>
                {{ item.text }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      app
      color="green darken-3"
      dark
    >
      <v-toolbar-title
        style="width: 300px; display: flex;"
        class=""
      >
        <v-app-bar-nav-icon  class="home-title" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <router-link  class="home-title" to="/">
          <h1>RADARSTAT-1</h1>
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

export default {
  name: 'App',
  props: {
    source: String,
  },
  components: {
  },
  data: () => ({
      drawer: null,
      items: [
        {
          text: 'Part I',
          model: true,
          children: [
            { text: 'Filter', route: '/' },
            { text: 'About', route: '/' },
          ],
        },
      ],
  }),
};
</script>

<style>
.home-title{
  color: white !important;
  text-decoration: none;
  font-size: 14px;
}
.router-link-active{
    border-left: 2px solid #347d32;
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
  color: #347d32;
}
</style>