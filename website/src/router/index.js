import { createRouter, createWebHistory } from 'vue-router'

import HumisHomepage from "@/views/HumisHomepage.vue";
import AboutUs from '@/views/AboutUs.vue'
import ContactUs from "@/views/ContactUs.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HumisHomepage,
      meta: {
        prettyName: 'Home page',
      }
    },
    {
      path: '/about',
      name: 'about',
      component: AboutUs,
      meta: {
        prettyName: 'About Us',
      }
    },
    {
      path: '/contact-us',
      name: 'contact-us',
      component: ContactUs,
      meta: {
        prettyName: 'Contact Us',
      }
    }
  ],
})

export default router