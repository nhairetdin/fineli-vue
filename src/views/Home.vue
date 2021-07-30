<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App" />

    <SearchInput />

    <div class="dataContainer">
      <div class="foodContainer">
        <FoodList />
      </div>
      
      <div class="foodComponentContainer">
        <FoodComponentlist />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import SearchInput from "@/components/SearchInput.vue";
import FoodComponentlist from "@/components/FoodComponentlist.vue";
import FoodList from "@/components/FoodList.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
    SearchInput,
    FoodComponentlist,
    FoodList
  },
};
</script>

<style lang="scss">
  .dataContainer {
    display: flex;
    margin-top: 1em;
    margin-bottom: 1em;
  }

  .foodComponentContainer {
    flex: 3;
    min-width: 25em;
  }

  .foodContainer {
    flex: 9;
    overflow: hidden;
    margin-right: 1em;
  }

  .col {
    overflow: hidden;
    margin-right: 1em;
  }

  .col-right {
    text-align: right;
  }
</style>