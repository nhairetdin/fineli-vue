<template>
  <div>
    <input v-model="filterKeyword" type="text" placeholder="Hakusana" />
  </div>
</template>

<script>
export default {
  computed: {
    filterKeyword: {
      get() {
        return this.$store.state.filterKeyword
      },
      set(value) {
        this.$store.commit('SET_FILTER_KEYWORD', value)
      },
    },
  },
}
</script>
