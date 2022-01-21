<template>
  <div class="food-row" @mouseover="mouseover(row)">
    <div
      v-html="highlight(row.foodname)"
      @click="
        clickAction === 'add' ? addSelected(row) : removeSelected(row.foodid)
      "
    ></div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: ['clickAction', 'row'],
  methods: {
    highlight(str) {
      const keyword = this.$store.state.filterKeyword.toUpperCase()

      if (keyword.length < 1) {
        return str
      }

      return str.replaceAll(
        keyword,
        `<span class="highlight">${keyword}</span>`,
      )
    },
    mouseover(food) {
      this.$store.commit('SET_FOOD_HOVER', food)
    },
    addSelected(food) {
      this.$store.commit('ADD_FOOD_SELECTED', { ...food, amount: 100 })
    },
    removeSelected(id) {
      this.$store.commit('REMOVE_FOOD_SELECTED', id)
    },
  },
}
</script>
