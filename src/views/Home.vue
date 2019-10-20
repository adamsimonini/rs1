<template>
  <div class="home">
    <h2>Image Map</h2>
    <Rs1Map></Rs1Map>
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

export default {
  name: 'home',
  components: {
    Rs1Map,
  },
};
</script>

<style scoped>
</style>