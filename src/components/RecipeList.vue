<template>
  <div class="food-categories">
    <div
      class="food-categories__content"
      v-for="recipe in recipes"
      :key="recipe.idMeal"
    >
      <!-- <router-link
        :to="{ name: 'recipe-list', params: { id: category.strCategory } }"
      > -->
      <img :src="recipe.strMealThumb" :alt="recipe.strMeal" />
      <h2 class="food-categories__title">{{ recipe.strMeal }}</h2>
      <!-- </router-link> -->
    </div>
  </div>
</template>

<script>
export default {
  props: ["recipes"],
};
</script>

<style></style>
