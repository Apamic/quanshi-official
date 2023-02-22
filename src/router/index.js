import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: ()=> import('../views/Home.vue')
  },
  {
    path: '/room',
    name: 'room',
    component: () => import('../views/Room.vue')
  },
  {
    path: '/logIn',
    name: 'logIn',
    component: () => import('../views/logIn.vue')
  },
  {
    path: '/personalCenter',
    name: 'personalCenter',
    component: () => import('../views/personalCenter.vue')
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
