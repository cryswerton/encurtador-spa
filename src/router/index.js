import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import {useAuth} from '@/stores/auth.js'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginView
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('../views/DashboardView.vue'),
      meta: {
        auth:true
      }
    }
  ]
})

router.beforeEach(async (to, from, next) => {
  if(to.meta?.auth){
    const auth = useAuth()
    if(auth.token && auth.user){
      const isAuthenticated = await auth.checkToken()
      if(isAuthenticated){
        next()
      }else{
        next({name: 'login'})
      }
    }else{
      next({name: 'login'})
    }
  }else{
    next()
  }
})

export default router
