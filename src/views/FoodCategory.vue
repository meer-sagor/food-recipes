<script>
import axios from "axios";
import Category from "../components/Category.vue";
import PageTitle from "../components/PageTitle.vue";
import LoadingSpinner from "../components/LoadingSpinner.vue";
export default {
  data() {
    return {
      loading: true,
      foodCategories: null,
      title: "Food categories",
    };
  },
  components: {
    Category,
    PageTitle,
    LoadingSpinner,
  },

  created() {
    this.loading = true;
    axios
      .get("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((res) => {
        const { data } = res;
        this.loading = false;
        this.foodCategories = data.categories;
      });
  },
};
</script>

<template>
  <PageTitle>
    <h1 class="title">{{ title }}</h1>
  </PageTitle>
  <span v-if="loading">
    <LoadingSpinner />
  </span>
  <Category :categories="foodCategories" />
</template>
