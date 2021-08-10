<template>
  <div>
    <div class="infoBlock" v-for="obj in componentData" :key="obj.data[0]">
      <div class="row">
        <div class="header">{{ obj.data[0].ylempiluokka }}</div>
      </div>

      <div class="row" v-for="component in obj.data" :key="component.nimi">
          <div class="col">
            <div 
              class="refchart" 
              :style="{ 
                width: percent(foodHover[component.koodi], component.koodi) || '0%' 
              }"
              @click="sort(component.koodi)"
            >
              {{ component.nimi }}
              <span class="highlight">{{ percent(foodHover[component.koodi], component.koodi) || "" }}</span>
            </div>
          </div>
          <div class="col col-right">{{ foodHover[component.koodi] }}</div>
          <div class="col">&nbsp; {{ component.yksikko.toLowerCase() }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    componentData() {
      return this.$store.state.componentData
    },
    foodHover() {
      return this.$store.state.foodHover
    },
  },
  methods: {
    percent(amount, code) {
      let referenceValue = this.$store.state.referenceValues[code.toLowerCase()]
      if (referenceValue === "0.00" || amount === undefined) {
        return null
      }

      // To Float
      referenceValue = +referenceValue
      amount = +amount

      const percent = amount * 100 / referenceValue
      return Math.floor(percent) + "%"
    },
    sort(code) {
      this.sortingOrder = !this.sortingOrder
      this.$store.commit('SORT_FOOD_DATA', { code: code, order: this.sortingOrder })
    }
  },
  data() {
    return {
      sortingOrder: false
    }
  }
}
    
</script>
