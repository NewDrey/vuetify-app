import { createRouter, createWebHistory } from 'vue-router'
import App from '../App.vue'
import '../assets/main.css'

const routes = [
  {
    path: '/',
    name: 'app',
    component: App
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})


export default router