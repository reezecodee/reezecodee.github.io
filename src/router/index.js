import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: "My Portfolio"
      }
    },
  ]
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || "Default Title";
  next();
});

export default router
