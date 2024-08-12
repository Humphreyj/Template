import { createWebHistory, createRouter } from "vue-router";

import HomeView from "@/views/HomeView.vue";
import ProjectsView from "@/views/ProjectsView.vue";

const routes = [
  {
    path: "/",
    component: HomeView,
    meta: {
      transition: "fade",
      order: 0,
    },
  },
  {
    path: "/projects",
    component: ProjectsView,
    meta: {
      transition: "fade",
      order: 1,
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.afterEach((to, from) => {
  let transition;
  if (to.meta.order > from.meta.order) {
    transition = "slide-left";
  } else {
    transition = "slide-right";
  }
  to.meta.transition = transition;
});

export default router;
