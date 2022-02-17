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

  mounted() {
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

<style scoped>
.title {
  text-align: center;
  margin: 3rem 0;
  padding: 1rem;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
}
</style>
