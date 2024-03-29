import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/services',
    name: 'services',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/Services.vue')
  },
  {
    path: '/credentials',
    name: 'credentials',
    component: () => import('../components/Credentials.vue')
  },
  {
    path: '/knowledge',
    name: 'knowledge',
    component: () => import('../components/Knowledge.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../components/About.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../components/Contact.vue')
  },
  {
    path: '/imprint',
    name: 'imprint',
    component: () => import('../components/Imprint.vue')
  },
  //temporary forward to google forms
  {
    path: '/abi2014',
    name: 'abi2014',
    component: () => import('../components/Abi2014.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
