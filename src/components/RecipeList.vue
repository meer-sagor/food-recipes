<template>
  <div class="food-categories">
    <div
      class="food-categories__content"
      v-for="recipe in recipes"
      :key="recipe.idMeal"
      @click="toggleModal(recipe.idMeal)"
    >
      <img
        :src="recipe.strMealThumb"
        :alt="recipe.strMeal"
        class="food-category__image"
      />
      <h2 class="food-categories__title">{{ recipe.strMeal }}</h2>
    </div>
  </div>
  <div v-if="showModal">
    <Modal @modalClose="toggleModal">
      <span v-if="loading">
        <LoadingSpinner />
      </span>

      <div v-for="recipeDetail in recipeDetails" :key="recipeDetail">
        <div class="recipe">
          <h1 class="recipe-heading">{{ recipeDetail.strMeal }}</h1>
          <p class="recipe-category">
            Category: {{ recipeDetail.strCategory }}
          </p>
          <p>Area: {{ recipeDetail.strArea }}</p>
        </div>
        <div class="recipe-details">
          <div>
            <img
              class="recipe-detail__image"
              :src="recipeDetail.strMealThumb"
              :alt="recipeDetail.strMeal"
            />
            <a
              :href="recipeDetail.strYoutube"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button class="recipe-details__instructions--button">
                Watch on Youtube
              </button>
            </a>
          </div>
          <div class="recipe-details__instructions">
            <p class="recipe-details__instructions--title">Instructions:</p>
            <p class="recipe-details__instructions--text">
              {{ recipeDetail.strInstructions }}
            </p>
          </div>
        </div>
      </div>
    </Modal>
  </div>
</template>

<script>
import axios from "axios";
import LoadingSpinner from "../components/LoadingSpinner.vue";
import Modal from "../components/Modal.vue";
export default {
  data() {
    return {
      loading: true,
      showModal: false,
      recipeDetails: [],
    };
  },
  props: ["recipes"],
  components: {
    Modal,
    LoadingSpinner,
  },
  methods: {
    toggleModal(id) {
      this.loading = true;
      axios
        .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        .then((res) => {
          const { data } = res;
          this.loading = false;
          this.recipeDetails = data.meals;
        });
      this.showModal = !this.showModal;
    },
  },
};
</script>

<style scoped>
.food-category__image {
  width: 34rem;
}
.recipe {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 1rem;
}
.recipe-heading {
  text-align: center;
}
.recipe-category {
  padding: 1rem 0;
}
.recipe-details {
  display: flex;
  align-items: center;
}
.recipe-detail__image {
  border-radius: 0.5em;
  margin-right: 2.5rem;
  width: 25rem;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 4px 12px;
}
.recipe-details__instructions--title {
  text-align: center;
  padding-bottom: 1rem;
  font-size: 2rem;
  text-transform: capitalize;
}
.recipe-details__instructions--text {
  line-height: 1.5;
}
.recipe-details__instructions--button {
  cursor: pointer;
  padding: 1rem;
  background: #b18c68;
  border: none;
  border-radius: 0.5em;
  color: white;
  font-size: inherit;
  margin: 1.5rem 0;
}
</style>
