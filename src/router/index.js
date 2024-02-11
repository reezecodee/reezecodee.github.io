import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import SkillsView from "../views/SkillsView.vue";
import ExperienceView from "../views/ExperienceView.vue";
import ProjectsView from "../views/ProjectsView.vue";
import BlogsView from "../views/BlogsView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      meta: {
        title: "My Portfolio",
      },
    },
    {
      path: "/about-me",
      name: "about",
      component: AboutView,
      meta: {
        title: "About Me - My Portfolio",
      },
    },
    {
      path: "/my-skills",
      name: "skills",
      component: SkillsView,
      meta: {
        title: "Skills - My Portfolio",
      },
    },
    {
      path: "/experience",
      name: "experience",
      component: ExperienceView,
      meta: {
        title: "Experience - My Portfolio",
      },
    },
    {
      path: "/my-projects",
      name: "projects",
      component: ProjectsView,
      meta: {
        title: "Projects - My Portfolio",
      },
    },
    {
      path: "/blogs",
      name: "blogs",
      component: BlogsView,
      meta: {
        title: "Blogs - My Portfolio",
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || "Default Title";
  next();
});

export default router;
