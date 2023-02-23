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


router.beforeEach(async (to, from, next) => {

  let token = localStorage.getItem('token');
  if (token) {
    next();
  } else {
    //未登录情况下
    let toPath = to.path;
    if (toPath.indexOf('/personalCenter') != -1) {
      // 未登录的情况下访问订单页，重定向到登录页，且将原本需要去的路径存储于地址栏的query参数中
      next('/login?redirect=' + toPath);
    } else {
      next();
    }
  }
})


export default router
