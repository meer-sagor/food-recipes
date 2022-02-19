<script>
import axios from "axios";
import RecipeList from "../components/RecipeList.vue";
import PageTitle from "../components/PageTitle.vue";
export default {
  async created() {
    const res = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${this.$route.params.id}`
    );
    this.recipeList = res.data.meals;
  },
  data() {
    return {
      title: `${this.$route.params.id} Recipe List`,
      recipeList: [],
    };
  },
  components: {
    PageTitle,
    RecipeList,
  },
};
</script>
<template>
  <div>
    <PageTitle>
      <h1 class="title">{{ title }}</h1>
    </PageTitle>
    <RecipeList :recipes="recipeList" />
  </div>
</template>

<style></style>
