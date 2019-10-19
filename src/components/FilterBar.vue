<template>
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
            <p>test</p>
            <!-- <template v-slot="datePicker">
              <p>test</p>
            </template> -->
            <!-- <slot name="item.componentName"></slot> -->
            <!-- <v-list-item
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
            </v-list-item> -->
          </v-list-group>
        </template>
      </v-list>
    </v-navigation-drawer>
</template>

<script>
export default {
  name: 'FilterBar',
  props: {
    source: String,
  },
  components: {
  },
  data: () => ({
      drawer: null,
      items: [
        {
          text: 'Beam Modes',
          model: true,
          componentName: 'datePicker',
        },
        {
          text: 'Date Ranges',
          model: false,
          componentName: 'datePicker'
        },
      ],
  }),
};

</script>