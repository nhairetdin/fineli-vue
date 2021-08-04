<template>
  <div>
    <div class="infoBlock" v-for="obj in componentData" :key="obj.data[0]">
      <div class="row">
        <div class="header">{{ obj.data[0].ylempiluokka }}</div>
      </div>

      <div class="row" v-for="component in obj.data" :key="component.nimi">
        <div class="col">{{ component.nimi }}</div>
        <div class="col col-right">{{ foodHover[component.koodi] }}</div>
        <div class="col col-right">{{ component.yksikko.toLowerCase() }}</div>
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
    }
  },
}
    
</script>
