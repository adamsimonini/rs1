<template>
  <div class="home">
      <h2>Image Map</h2>
      <P>description</P>
      <div class="map">
        <p>map here</p>
      </div>
      <h2>How To Use This App</h2>
      <ol>
        <li>Step 1</li>
        <li>Step 2</li>
        <li>Step 3</li>
        <li>Step 4</li>
      </ol>
  </div>
</template>

<script>

export default {
  name: 'home',
  components: {
  },
};
</script>

<style scoped>
.link .v-list-item__title{
  color: #2e7d32;
  font-size: 1rem !important;
}
.link {
  width: 100%;
  padding: 0 10px;
  border: 3px solid transparent;
  opacity: 1;
}
.link:hover {
  border-bottom: 3px solid #2e7d32;
}
.splash-art {
  width: 100%;
  background-image: url('../assets/farm-clipart.jpg');
  background-position: center;
  height: 400px;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
}
.splash-parent {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.link-box {
  opacity: .9;
  padding: 10px 0;
}
</style>