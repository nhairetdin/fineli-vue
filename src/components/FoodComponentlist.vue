<template>
  <div>
    <div class="infoBlock" v-for="obj in componentData" :key="obj.header">
      <div class="row">
        <div class="header">{{ obj.header }}</div>
        <!-- <div class="header">Yks.</div> -->
      </div>

      <div class="row" v-for="component in obj.components" :key="component">
        <div>{{ component }}</div>
        <div>g</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      componentData: [
        {
          header: "Perusravintoaineet",
          components: [
            "alkoholi",
            "energia",
            "hiilihydraatti",
            "proteiini",
            "rasva"
          ]
        },
        {
          header: "Vitamiinit",
          components: [
            "E-vitamiini",
            "D-vitamiini",
            "K-vitamiini",
            "Karotenoidit",
            "A-vitamiini",
            "Niasiini",
            "B12-vitamiini"
          ]
        }
      ]
    }
  }
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