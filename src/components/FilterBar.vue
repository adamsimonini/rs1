<template>
  <v-navigation-drawer v-model="drawer" :clipped="$vuetify.breakpoint.lgAndUp" app>
    <v-list dense>
      <template v-for="(item, i) in filters">
        <v-list-group
          :key="item.text"
          v-model="item.show"
          :prepend-icon="item.show ? item.icon : item['icon-alt']"
          append-icon
        >
          <template v-slot:activator>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>{{ item.name }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </template>
          <v-list-item-subtitle v-if="item.children[0].name" class="filterSubtitle">{{ item.children[i].name }}</v-list-item-subtitle>
          <v-list-item v-for="child in item.children" :key="child.name">
            <v-list-item-action v-if="child.icon">
              <v-icon>{{ child.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <component v-bind:is="child.componentName"></component>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
      </template>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import BMStandard from "@/components/BeamModes/Standard.vue";
import BMFine from "@/components/BeamModes/Fine.vue";
import BMScn from "@/components/BeamModes/ScanSarNarrow.vue";
import BMExtendedHigh from "@/components/BeamModes/ExtendedHigh.vue";
import BMExtendedLow from "@/components/BeamModes/ExtendedLow.vue";
import LocationSearch from "@/components/LocationSearch.vue";
import DateRanges from "@/components/DateRanges.vue";

export default {
  name: "FilterBar",
  props: {
    source: String
  },
  components: {
    BMStandard,
    BMFine,
    BMScn,
    BMExtendedHigh,
    BMExtendedLow,
    LocationSearch,
    DateRanges
  },
  data: () => ({
    drawer: null,
    filters: [
      {
        name: "Search",
        show: true,
        children: [
          {
            componentName: "LocationSearch"
          },
        ]
      },
      {
        name: "Dates",
        show: false,
        children: [
          {
            componentName: "DateRanges"
          },
        ]
      },
      {
        name: "Beam Modes",
        show: false,
        children: [
          {
            name: "ScanSAR Narrow",
            componentName: "BMScn"
          },
          {
            name: "Extended High",
            componentName: "BMExtendedHigh"
          },
          {
            name: "Extended Low",
            componentName: "BMExtendedLow"
          },
          {
            name: "Standard",
            componentName: "BMStandard"
          },
          {
            name: "Fine",
            componentName: "BMFine"
          }
        ]
      },
    ]
  })
};
</script>

<style scoped>
.filterSubtitle {
  padding-left: 35px;
  color: black;
}
</style>