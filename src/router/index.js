import { createRouter, createWebHistory } from 'vue-router'
import HelloWorldView from '../views/HelloWorldView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HelloWorldView,
      meta: {
        title: "Hello World"
      }
    },
  ]
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || "Default Title";
  next();
});

export default router
