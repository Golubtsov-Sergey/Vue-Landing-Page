import VueRouter from 'vue-router'
import Vue from 'vue'

import MainPage from '@/components/MainPage/MainPage'
import Login from '@/components/Login/Login'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/',
      name: 'mainPage',
      component: MainPage,
      props: true
    },
    { path: '/login',
      name: 'login',
      component: Login
    }
  ] 
})

export default router