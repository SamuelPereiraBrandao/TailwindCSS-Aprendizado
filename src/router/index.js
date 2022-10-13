import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Pag1 from '@/components/Pag1.vue'
import Pag2 from '@/components/Pag2.vue'
import Pag3 from '@/components/Pag3.vue'
import Pag4 from '@/components/Pag4.vue'
import Pag5 from '@/components/Pag5.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    children: [
      {
        path:'/pag1',
        name:'pag1',
        component: Pag1
      },
      {
        path:'/pag2',
        name:'pag2',
        component: Pag2
      },
      {
        path:'/pag3',
        name:'pag3',
        component: Pag3
      },
      {
        path:'/pag4',
        name:'pag4',
        component: Pag4
      },
      {
        path:'/pag5',
        name:'pag5',
        component: Pag5
      },
    ],
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
