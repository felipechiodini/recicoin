import { createRouter, createWebHistory } from 'vue-router'
import { useUserStore } from '@/stores/user'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: () => import('@/layouts/Base.vue'),
      meta: {
        requiresAuth: true
      },
      children: [
        {
          path: '/',
          name: 'home',
          component: () => import('@/views/Home.vue'),
        },
        {
          path: '/perfil',
          name: 'profile',
          component: () => import('@/views/Profile.vue')
        },
        {
          path: '/enderecos',
          name: 'addresses',
          component: () => import('@/views/Addresses.vue')
        },
        {
          path: '/coletas',
          name: 'collects',
          component: () => import('@/views/Collects.vue')
        },
        {
          path: '/saques',
          name: 'withdrawals',
          component: () => import('@/views/Withdrawals.vue')
        }
      ]
    },
    {
      path: '/entrar',
      name: 'sing-in',
      component: () => import('@/views/SingIn.vue'),
    },
    {
      path: '/esqueci-minha-senha',
      name: 'forget-password',
      component: () => import('@/views/ForgetPassword.vue')
    },
    {
      path: '/cadastro',
      name: 'sing-up',
      component: () => import('@/views/SingUp.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    const user = useUserStore()
    
    if (user.token !== null) {
      next()
    } else {
      next({ name: 'sing-in' })
    }
  } else {
    next()
  }
})

export default router
