<template>
  <div class="container">
    <Navbar />
    <router-view />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";

export default {
  name: "App",
  components: {
    Navbar,
  },
  created() {
    this.$store.dispatch("fetchComponentData")
  }
};
</script>

<style lang="scss">
#app {
  // font-family: Avenir, Helvetica, Arial, sans-serif;
  // -webkit-font-smoothing: antialiased;
  // -moz-osx-font-smoothing: grayscale;
  font-size: 0.8em;
  // font-family: 'Roboto Mono', monospace;
  // font-family: 'Mukta', sans-serif;
  font-family: 'Nunito', sans-serif;
  font-weight: 700;
  color: #bfbfb2;
}

.container {
  margin-left: 4em;
  margin-right: 4em;
}

html {
  background-color: #383838;
}
</style>
