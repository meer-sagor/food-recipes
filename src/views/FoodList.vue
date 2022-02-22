<script>
import axios from "axios";
import RecipeList from "../components/RecipeList.vue";
import PageTitle from "../components/PageTitle.vue";
import LoadingSpinner from "../components/LoadingSpinner.vue";
export default {
  async created() {
    this.loading = true;
    const res = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${this.$route.params.id}`
    );
    this.loading = false;
    this.recipeList = res.data.meals;
  },
  data() {
    return {
      loading: true,
      title: `${this.$route.params.id} Recipe List`,
      recipeList: [],
    };
  },
  components: {
    PageTitle,
    RecipeList,
    LoadingSpinner,
  },
};
</script>
<template>
  <div>
    <PageTitle>
      <h1 class="title">{{ title }}</h1>
    </PageTitle>
    <span v-if="loading">
      <LoadingSpinner />
    </span>
    <RecipeList :recipes="recipeList" />
  </div>
</template>
