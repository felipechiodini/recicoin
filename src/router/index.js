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
        }
      ]
    },
    {
      path: '/entrar',
      name: 'login',
      component: () => import('@/views/Login.vue'),
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
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    const user = useUserStore()
    
    if (user.token !== null) {
      next()
    } else {
      next('/login')
    }
  } else {
    next()
  }
})

export default router
