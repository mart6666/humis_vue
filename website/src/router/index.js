import { createRouter, createWebHistory } from 'vue-router'
import AboutUs from "@/views/AboutUs.vue";
import HumisHomepage from "@/views/HumisHomepage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HumisHomepage,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutUs,
    },
  ],
})

export default router
