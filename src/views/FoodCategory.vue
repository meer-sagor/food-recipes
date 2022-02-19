<script>
import axios from "axios";
import Category from "../components/Category.vue";
import PageTitle from "../components/PageTitle.vue";
export default {
  data() {
    return {
      foodCategories: null,
      title: "Food categories",
    };
  },
  components: {
    Category,
    PageTitle,
  },

  created() {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((res) => {
        const { data } = res;
        this.foodCategories = data.categories;
      });
  },
};
</script>

<template>
  <PageTitle>
    <h1 class="title">{{ title }}</h1>
  </PageTitle>
  <Category :categories="foodCategories" />
</template>
