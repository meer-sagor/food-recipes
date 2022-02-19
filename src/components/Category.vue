<script>
export default {
  props: ["categories"],
};
</script>

<template>
  <div class="food-categories">
    <div
      class="food-categories__content"
      v-for="category in categories"
      :key="category.idCategory"
    >
      <router-link
        :to="{ name: 'recipe-list', params: { id: category.strCategory } }"
      >
        <img :src="category.strCategoryThumb" :alt="categories.strCategory" />
        <h2 class="food-categories__title">{{ category.strCategory }}</h2>
      </router-link>
    </div>
  </div>
</template>
