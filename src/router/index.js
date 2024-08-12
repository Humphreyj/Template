import { createWebHistory, createRouter } from "vue-router";

import HomeView from "@/views/HomeView.vue";
import ProjectsView from "@/views/ProjectsView.vue";

const routes = [
  {
    path: "/",
    component: HomeView,
    name: "Home",
    meta: {
      transition: "fade",
      order: 0,
      viewLoaded: false,
    },
  },
  {
    path: "/projects",
    component: ProjectsView,
    name: "projects",
    meta: {
      transition: "fade",
      order: 1,
      viewLoaded: false,
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.afterEach((to, from) => {
  if (!from.name) {
    // If there is no name, the page has loaded for the first time.
    // return nothing so default transition plays.
    to.meta.viewLoaded = true;
    return;
  }
  from.meta.viewLoaded = false;

  let transition;
  if (to.meta.order > from.meta.order) {
    transition = "slide-left";
  } else {
    transition = "slide-right";
  }
  to.meta.viewLoaded = true;
  to.meta.transition = transition;
});

export default router;
