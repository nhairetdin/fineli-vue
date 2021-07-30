<template>
  <div>
    <div class="foodRow" v-for="row in foodDataDisplay" :key="row.foodid">{{ row.foodname }}</div>
  </div>
</template>

<script>
export default {
  computed: {
    foodDataDisplay() {
      const keyword = this.$store.state.filterKeyword
        .toUpperCase()
      
      return this.$store.state.foodData
        .filter(food => food.foodname.includes(keyword))
        .slice(-50)
    }
  },
}
</script>

<style scoped>
  .foodRow {
    white-space: nowrap;
    overflow: hidden;
  }
</style>