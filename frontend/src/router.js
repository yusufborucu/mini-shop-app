import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Login from './components/Login'
import Home from './components/Home'

const routes = [
  { path: '/', component: Home },
  { path: '/login', component: Login }
]

export const router = new VueRouter({
  mode: 'history',
  routes
})