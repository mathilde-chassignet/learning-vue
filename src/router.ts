import { createWebHistory, createRouter } from "vue-router";

import Home from "./Home.vue";
import User from "./UserDetails.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/user/:id(\\d+)", name: "user", component: User },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
