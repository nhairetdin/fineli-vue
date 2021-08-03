<template>
  <div class="home">
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
import SearchInput from "@/components/SearchInput.vue";
import FoodComponentlist from "@/components/FoodComponentlist.vue";
import FoodList from "@/components/FoodList.vue";

export default {
  name: "Home",
  components: {
    SearchInput,
    FoodComponentlist,
    FoodList
  },
};
</script>
