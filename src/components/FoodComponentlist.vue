<template>
  <div>
    <div class="info-block" v-for="obj in componentData" :key="obj.data[0]">
      <div class="row">
        <div></div>
        <div class="header">{{ obj.data[0].ylempiluokka }}</div>
      </div>

      <div
        class="row"
        v-for="cmp in obj.data"
        :key="cmp.nimi"
        @click="sort(cmp.koodi)"
        @mouseover="hoverCode = cmp.koodi"
      >
        <!-- Refactor this later -->
        <div v-if="sortCode === cmp.koodi && sortOrder" class="highlight">
          &#8681;
        </div>
        <div v-else-if="sortCode === cmp.koodi && !sortOrder" class="highlight">
          &#8679;
        </div>
        <div v-else-if="hoverCode === cmp.koodi && sortOrder">&#8681;</div>
        <div v-else-if="hoverCode === cmp.koodi && !sortOrder">&#8679;</div>
        <div v-else></div>
        <!-- Refactor this later -->

        <div class="col">
          <div
            class="refchart"
            :style="{
              width:
                percent(sumFoodCmpAmount(foodHover, cmp.koodi), cmp.koodi) ||
                '0%',
            }"
          >
            {{ cmp.nimi }}
            <span class="highlight">{{
              percent(sumFoodCmpAmount(foodHover, cmp.koodi), cmp.koodi) || ''
            }}</span>
          </div>
        </div>
        <div class="col col-right">
          {{ sumFoodCmpAmount(foodHover, cmp.koodi) }}
        </div>
        <div class="col">&nbsp; {{ cmp.yksikko.toLowerCase() }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    componentData() {
      // Display ENERC unit as 'kcal'
      return this.$store.state.componentData.map((group) => {
        return {
          ...group,
          data: group.data.map((cmp) => {
            return cmp.koodi === 'ENERC' ? { ...cmp, yksikko: 'kcal' } : cmp
          }),
        }
      })
    },
    foodHover() {
      return this.$store.state.foodHover
    },
  },
  methods: {
    percent(amount, code) {
      let referenceValue = this.$store.state.referenceValues[code.toLowerCase()]
      if (referenceValue === '0.00' || amount === undefined) {
        return null
      }

      // To Float
      referenceValue = +referenceValue
      amount = +amount

      const percent = (amount * 100) / referenceValue
      return Math.floor(percent) + '%'
    },
    sort(code) {
      // Change order only when clicking same cmp again
      if (code === this.sortCode) {
        this.sortOrder = !this.sortOrder
      }
      this.sortCode = code
      this.$store.commit('SORT_FOOD_DATA', {
        code: code,
        order: this.sortOrder,
      })
    },
    sumFoodCmpAmount(foodHover, componentCode) {
      if (!foodHover.length > 0) {
        return null
      }

      const sum = foodHover.reduce((prev, curr) => {
        const amountOfFood = curr.amount || 100
        const amountOfComponent = (amountOfFood / 100) * +curr[componentCode]
        return prev + amountOfComponent
      }, 0)

      // kj to kcal
      return componentCode !== 'ENERC'
        ? Math.round(sum)
        : Math.round(sum * 0.2390057)
    },
  },
  data() {
    return {
      sortOrder: false,
      sortCode: false,
      hoverCode: false,
    }
  },
}
</script>
