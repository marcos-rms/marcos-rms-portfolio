import { createRouter, createWebHistory } from 'vue-router'
import SinglePageView from '../views/SinglePageView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: SinglePageView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
