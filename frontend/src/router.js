import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Login from './components/Login'
import Home from './components/Home'
import Basket from './components/Basket'
import Orders from './components/Orders'
import OrderDetail from './components/OrderDetail'

const routes = [
  { path: '/', component: Home },
  { path: '/login', component: Login },
  { path: '/basket', component: Basket },
  { path: '/orders', component: Orders },
  { path: '/order-detail', component: OrderDetail }
]

export const router = new VueRouter({
  mode: 'history',
  routes
})