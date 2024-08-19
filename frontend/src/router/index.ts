import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/home/HomePage.vue'
import AppBakersListPage from '@/pages/app-bakers/AppBakersListPage.vue'
import PastriesListPage from '@/pages/pastries/PastriesListPage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/appbakers',
    name: 'appbakers',
    component: AppBakersListPage
  },
  {
    path: '/pastries',
    name: 'pastries',
    component: PastriesListPage
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
