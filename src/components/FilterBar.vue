<template>
      <v-navigation-drawer
      v-model="drawer"
      :clipped="$vuetify.breakpoint.lgAndUp"
      app
    >
      <v-list dense>
        <template v-for="(item, i) in filters">
          <!-- <v-layout
            v-if="item.heading"
            :key="item.heading"
            align-center
          >
          </v-layout> -->
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
                    {{ item.name }}
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </template>
            <v-list-item-subtitle class="filterSubtitle">{{ item.modes[i].name }}</v-list-item-subtitle>
            <!-- <p>{{ item.modes[i].name }}</p> -->
            <v-list-item
              v-for="mode in item.modes"
              :key="mode.name"
            >
              <v-list-item-action v-if="mode.icon">
                <v-icon>{{ mode.icon }}</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <component v-bind:is="mode.componentName"></component>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
        </template>
      </v-list>
    </v-navigation-drawer>
</template>

<script>
import Standard from '@/components/BeamModes/Standard.vue';
// import DatePicker from '@/components/DatePicker.vue';

export default {
  name: 'FilterBar',
  props: {
    source: String,
  },
  components: {
    Standard,
    // DatePicker,
  },
  data: () => ({
      drawer: null,
      filters: [
        {
          name: 'Beam Modes',
          model: true,
          modes: [
            {
              name: 'Standard',
              componentName: 'Standard'
            },
            {
              name: 'Standard222',
              componentName: 'Standard'
            },
          ],
        },
        // {
        //   text: 'Date Ranges',
        //   model: false,
        //   componentName: 'DatePicker'
        // },
      ],
  }),
};

</script>

<style scoped>
  .filterSubtitle {
    padding-left: 35px;
    color: black;
  }
</style>