<template>
  <div class="container">
    <Navbar />
    <router-view />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'App',
  components: {
    Navbar,
  },
  created() {
    this.$store.dispatch('fetchComponentData')
    this.$store.dispatch('fetchFoodData')
  },
}
</script>
