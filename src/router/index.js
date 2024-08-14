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
      name: 'login',
      component: () => import('@/views/Enter.vue'),
    },
    {
      path: '/esqueci-minha-senha',
      name: 'forget-password',
      component: () => import('@/views/ForgetPassword.vue')
    },
    {
      path: '/cadastro',
      name: 'register',
      component: () => import('@/views/SingUp.vue')
    },
    {
      path: '/0bdf4fbe5d9bd73ffe355f9c9127b17c73968169dee40c99af1f0ef221eab9589182d7b3ce3bdd7a88f65ce2780d93c3692d53fcd9bdcb9cc9cfda73f09d30b3',
      name: 'admin',
      component: () => import('@/views/Admin.vue')
    }
  ]
})

// router.beforeEach((to, from, next) => {
//   if (to.meta.requiresAuth) {
//     const user = useUserStore()
    
//     if (user.token !== null) {
//       next()
//     } else {
//       next({ name: 'login' })
//     }
//   } else {
//     next()
//   }
// })

export default router
