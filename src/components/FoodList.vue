<template>
  <div>
    <div class="selected-food-container" v-show="selected.length > 0">
      <div class="food-row header" @mouseover="mouseover(selected)">
        Uusi ateria, yhteensä:
      </div>

      <transition-group name="list" tag="div" class="position-relative">
        <div
          @mouseover="mouseover(row)"
          class="food-row"
          v-for="row in selected"
          :key="row.foodid + 2"
        >
          <div
            v-html="highlight(row.foodname)"
            @click="removeSelected(row.foodid)"
          ></div>

          <div
            class="highlight col-right"
            contenteditable
            @blur="(event) => updateAmount(event, row.foodid)"
            @keydown.enter="(event) => updateAmount(event, row.foodid)"
            v-text="getAmount(row.foodid)"
          ></div>

          <div class="highlight col-right">g</div>
        </div>
      </transition-group>
    </div>

    <div
      @click="addSelected(row)"
      @mouseover="mouseover(row)"
      class="food-row"
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
    },
    getAmount() {
      return (foodid) => {
        let amount

        this.$store.state.foodSelected.forEach((food) => {
          if (food.foodid === foodid) {
            amount = food.amount
          }
        })

        return amount
      }
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
    updateAmount(event, foodid) {
      let amount = +event.target.innerText

      if (isNaN(amount)) {
        console.log('Its Nanaana')
        amount = 100
        event.target.innerText = 100
      }

      this.$store.commit('SET_SELECTED_FOOD_AMOUNT', {
        foodid: foodid,
        amount: amount,
      })
      event.target.blur()
    },
  },
}
</script>
