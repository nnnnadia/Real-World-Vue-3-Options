import { createRouter, createWebHistory } from 'vue-router'
import EventList from '../views/EventList.vue'
import AboutView from '../views/AboutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'EventList',
      component: EventList
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    }
  ]
})

export default router
