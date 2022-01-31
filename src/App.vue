<template>
  <div class="container">
    <Sidebar />
    <Navbar />
    <router-view />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import Sidebar from '@/components/Sidebar.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Sidebar
  },
  created() {
    this.$store.dispatch('fetchComponentData')
    this.$store.dispatch('fetchFoodData')
    
    if (window.localStorage.getItem('user')) {
      this.$store.commit('TOGGLE_LOGIN')
    }
  },
}
</script>
