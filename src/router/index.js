import { createRouter, createWebHistory } from 'vue-router'
import ProductView from '../views/ProductView.vue'
import '../assets/main.css'

const routes = [
  {
    path: '/',
    name: 'product',
    component: ProductView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
