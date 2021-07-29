<template>
  <div>
    <div v-for="row in foodDataDisplay" :key="row.foodid">{{ row.foodname }}</div>
  </div>
</template>

<script>
export default {
  computed: {
    foodDataDisplay() {
      return this.$store.state.foodData.slice(-50)
    }
  },
}
</script>

<style>

</style>