import { createRouter, createWebHistory } from "vue-router";
import FoodCategory from "../views/FoodCategory.vue";
import RecDetails from "../views/RecDetails.vue";
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
  // {
  //   path: "/recipe/:id/:slug",
  //   component: RecDetails,
  // },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
