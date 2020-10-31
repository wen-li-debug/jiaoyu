import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Login = () => import('@/views/login')
const Home = () => import('@/views/home')
const Layout = () => import('@/views/layout')
const WxMessage = () => import('@/views/wxMessage')

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/layout',
    name: 'layout',
    component: Layout,
    children: [
      {
        path: '/home',
        name: 'home',
        component: Home
      },
      {
        path: '/wxMessage',
        name: 'wxMessage',
        component: WxMessage
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, form, next) => {
  const status = localStorage.getItem('status')
  if (to.path === '/login') {
    next()
  } else {
    if (status === 'wl2020') {
      next()
    } else {
      next('/login')
    }
  }
})

export default router
