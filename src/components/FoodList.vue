<template>
  <div>
    <div class="foodRow" v-for="row in foodDataDisplay" :key="row.foodid" v-html="highlight(row.foodname)"></div>
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
    },
  },
  methods: {
    highlight(str) {
      const keyword = this.$store.state.filterKeyword
        .toUpperCase()

      return str.replaceAll(keyword, `<span class="highlight">${keyword}</span>`)
    }
  }
}
</script>
