<template>
  <div>
    <div class="infoBlock" v-for="obj in componentData" :key="obj.data[0]">
      <div class="row">
        <div class="header">{{ obj.data[0].ylempiluokka }}</div>
        <!-- <div class="header">Yks.</div> -->
      </div>

      <div class="row" v-for="component in obj.data" :key="component.nimi">
        <div>{{ component.nimi }}</div>
        <div>g</div>
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
    grid-template-columns: 95% 5%;
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
  }
</style>