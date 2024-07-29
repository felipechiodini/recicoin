import { defineStore } from 'pinia'
import Router from '@/router'
import api from '@/js/api.js'

export const useUserStore = defineStore('user', {
  state: () => {
    return {
      user: null,
      token: null
    }
  },
  getters: {
    firstName(state) {
      return state.user?.name.split(' ')[0]
    }
  },
  actions: {
    setToken(token) {
      this.token = token
    },
    setUser(user) {
      this.user = user
    },
    logout(callback) {
      api.post('auth/logout').then(() => {
        localStorage.clear()
        Router.push({ name: 'auth.login' })
        callback(false)
      })
    }
  },
  persist: true
})