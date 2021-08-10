<template>
  <div>
    <div
      @mouseover="mouseover(row)"
      class="foodRow"
      v-for="row in foodDataDisplay"
      :key="row.foodid"
      v-html="highlight(row.foodname)"
    ></div>
  </div>
</template>

<script>
export default {
  computed: {
    foodDataDisplay() {
      const keyword = this.$store.state.filterKeyword.toUpperCase()

      return this.$store.state.foodData
        .filter((food) => food.foodname.includes(keyword))
        .slice(0, 50)
    },
  },
  methods: {
    highlight(str) {
      const keyword = this.$store.state.filterKeyword.toUpperCase()

      if (keyword.length < 1) {
        return str
      }

      return str.replaceAll(
        keyword,
        `<span class="highlight">${keyword}</span>`
      )
    },
    mouseover(food) {
      this.$store.commit('SET_FOOD_HOVER', food)
    },
  },
}
</script>
