<template>
  <div class="home">
    <VMap />
    <!-- <Rs1Map></Rs1Map> -->
    <!-- <h2>How To Use This App</h2>
    <ol>
      <li>Step 1</li>
      <li>Step 2</li>
      <li>Step 3</li>
      <li>Step 4</li>
    </ol> -->
  </div>
</template>

<script>
import Rs1Map from '@/components/Rs1Map.vue'
import VMap from '@/components/VueMBMap.vue'

export default {
  name: 'home',
  components: {
    Rs1Map,
    VMap,
  },
};
</script>

<style scoped>
</style>