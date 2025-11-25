import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BerandaView from '@/views/BerandaView.vue'
import LandingPageView from '@/views/LandingPageView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: HomeView,
    // },
    {
      path: '/',
      name: 'landingPage',
      component: LandingPageView,
    },
    {
      path: '/Beranda',
      name: 'beranda',
      component: BerandaView,
    },
  ],
})

export default router
