import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BerandaView from '@/views/BerandaView.vue'
import LandingPageView from '@/views/LandingPageView.vue'
import AlreadyReadView from '@/views/AlreadyReadView.vue'
import UnreadBookView from '@/views/UnreadBookView.vue'
import AddBookView from '@/views/AddBookView.vue'
import AccountView from '@/views/AccountView.vue'

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
    {
      path: '/SudahDibaca',
      name: 'sudahDibaca',
      component: AlreadyReadView,
    },
    {
      path: '/BelumDibaca',
      name: 'belumDibaca',
      component: UnreadBookView,
    },
    {
      path: '/TambahBuku',
      name: 'tambahBuku',
      component: AddBookView,
    },
    {
      path: '/Akun',
      name: 'akun',
      component: AccountView,
    },
  ],
})

export default router
