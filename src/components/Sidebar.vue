<template>
  <div class="sidebar" :class="{ enter: visible }">
    <h1>Sidebar</h1>
    <button @click="closeSidebar()">Close</button>
  </div>
</template>

<script>
export default {
  computed: {
    visible() {
      return this.$store.state.sidebarVisible
    },
  },
  methods: {
    closeSidebar() {
      this.$store.commit('TOGGLE_SIDEBAR')
    }
  }
}
</script>
