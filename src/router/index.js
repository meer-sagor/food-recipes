import { createRouter, createWebHistory } from "vue-router";
import FoodCategory from "../views/FoodCategory.vue";
const routes = [
  {
    path: "/",
    name: "FoodCategory",
    component: FoodCategory,
  },
  {
    path: "/recipe/:id",
    name: "recipe-list",
    component: () =>
      import(/*webpackChunkName: "foodList"*/ "../views/FoodList.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
