import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Login from './components/Login'
import Home from './components/Home'
import Basket from './components/Basket'
import Orders from './components/Orders'
import OrderDetail from './components/OrderDetail'

const routes = [
  { path: '/login', component: Login },
  { path: '/', component: Home, meta: { requiresAuth: true } },  
  { path: '/basket', component: Basket, meta: { requiresAuth: true } },
  { path: '/orders', component: Orders, meta: { requiresAuth: true } },
  { path: '/order-detail/:id', component: OrderDetail, meta: { requiresAuth: true } }
]

export const router = new VueRouter({
  mode: 'hash',
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    let token = localStorage.getItem("token")
    let role = localStorage.getItem('role')
    if (!token || !role) {
      next('/login')
    } else {
      next()
    }
  } else {
    next()
  }
})