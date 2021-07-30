<template>
  <div>
    <div class="infoBlock" v-for="obj in componentData" :key="obj.data[0]">
      <div class="row">
        <div class="header">{{ obj.data[0].ylempiluokka }}</div>
        <!-- <div class="header">Yks.</div> -->
      </div>

      <div class="row" v-for="component in obj.data" :key="component.nimi">
        <div class="col">{{ component.nimi }}</div>
        <div class="col col-right">1437.8</div>
        <div class="col">mg</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    componentData() {
      return this.$store.state.componentData
    }
  },
}
    
</script>

<style scoped>
  .row {
    display: grid;
    grid-template-columns: 70% 20% 10%;
    overflow: hidden;
  }

  .flexRow {
    display: flex;
  }

  .header {
    font-weight: bold;
    color: lightgreen;
  }

  .infoBlock {
    margin-bottom: 1em;
    white-space: nowrap;
  }
</style>