<script>
import axios from "axios";
export default {
  props: ["categories"],
  methods: {
    foodList(foodCategory) {
      const category = foodCategory.strCategory;
      axios
        .get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
        .then((res) => {
          const { data } = res;
          console.log(data);
          console.log(this.$router);
        });
    },
  },
};
</script>

<template>
  <div class="food-categories">
    <div
      class="food-categories__content"
      v-for="category in categories"
      :key="category.idCategory"
      @click="foodList(category)"
    >
      <img :src="category.strCategoryThumb" :alt="categories.strCategory" />
      <h2 class="food-categories__title">{{ category.strCategory }}</h2>
    </div>
    <div class="action"></div>
  </div>
</template>

<style scoped>
.food-categories {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(35rem, 1fr));
}
.food-categories__content {
  margin: 2rem;
  cursor: pointer;
  text-align: center;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  transition: all 0.2s ease-in-out;
}
.food-categories__content:hover {
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
}
.food-categories__title {
  margin: 1rem;
}
</style>
