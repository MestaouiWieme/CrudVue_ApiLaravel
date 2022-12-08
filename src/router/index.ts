import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Ajout from '../components/Ajout.vue'
import Modifier from '../components/Modifier.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/Ajout',
      name: 'ajout',
      component: Ajout
    },
    {
      path: '/Modifier/:id',
      name: 'modifier',
      component: Modifier
    },
  ]
})

export default router
