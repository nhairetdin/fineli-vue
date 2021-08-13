<template>
  <div>
    <div class="selected-food-container" v-show="selected.length > 0">
      <div
        @mouseover="mouseover(row)"
        class="foodRow"
        v-for="row in selected"
        :key="row.foodid+2"
      >
        <div v-html="highlight(row.foodname)"></div>
      </div>
    </div>

    <div
      @click="addSelected(row)"
      @mouseover="mouseover(row)"
      class="foodRow"
      v-for="row in foodDataDisplay"
      :key="row.foodid"
    >
      <div v-html="highlight(row.foodname)"></div>
    </div>
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
    selected() {
      return this.$store.state.foodSelected
    }
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
    addSelected(food) {
      this.$store.commit('ADD_FOOD_SELECTED', food)
    }
  },
}
</script>
