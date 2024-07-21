import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/Home.vue')
    },
    {
      path: '/entrar',
      name: 'login',
      component: () => import('@/views/Login.vue')
    },
    {
      path: '/esqueci-minha-senha',
      name: 'forget-password',
      component: () => import('@/views/ForgetPassword.vue')
    },
    {
      path: '/cadastro',
      name: 'register',
      component: () => import('@/views/Register.vue')
    },
    {
      path: '/perfil',
      name: 'profile',
      component: () => import('@/views/Profile.vue')
    },
    {
      path: '/map',
      name: 'map',
      component: () => import('@/views/Map.vue')
    }
  ]
})

export default router
