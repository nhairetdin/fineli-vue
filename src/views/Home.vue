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
