<template>
  <div>
    <div class="selected-food-container" v-show="selected.length > 0">
      <div class="food-row header" @mouseover="mouseover(selected)">
        Uusi ateria, yhteensä:
      </div>

      <transition-group name="list" tag="div" class="position-relative">
        <food-row
          v-for="row in selected"
          :key="row.foodid"
          :row="row"
          clickAction="remove"
        >
          <div
            class="highlight col-right"
            contenteditable
            @blur="(event) => updateAmount(event, row.foodid)"
            @keydown.enter="(event) => updateAmount(event, row.foodid)"
            v-text="getAmount(row.foodid)"
          ></div>

          <div class="highlight col-right">g</div>
        </food-row>
      </transition-group>
    </div>

    <food-row
      v-for="row in foodDataDisplay"
      :key="row.foodid"
      :row="row"
      clickAction="add"
    >
    </food-row>
  </div>
</template>

<script>
import FoodRow from '@/components/FoodRow.vue'

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
        const found = this.$store.state.foodSelected.find(
          (food) => food.foodid === foodid,
        )
        return found.amount
      }
    },
  },
  methods: {
    updateAmount(event, foodid) {
      let amount = +event.target.innerText

      if (isNaN(amount)) {
        amount = 100
        event.target.innerText = 100
      }

      this.$store.commit('SET_SELECTED_FOOD_AMOUNT', {
        foodid: foodid,
        amount: amount,
      })
      event.target.blur()
    },
    mouseover(food) {
      this.$store.commit('SET_FOOD_HOVER', food)
    },
  },
  components: {
    FoodRow,
  },
}
</script>
