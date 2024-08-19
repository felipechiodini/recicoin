import { defineStore } from 'pinia'
import Router from '@/router'
import api from '@/js/api.js'

export const useUserStore = defineStore('user', {
  state: () => {
    return {
      user: null,
      addresses: null,
      token: null
    }
  },
  getters: {
    firstName(state) {
      return state.user?.name.split(' ')[0]
    },
    addresses(state) {
      return state.user?.addresses || []
    }
  },
  actions: {
    setToken(token) {
      this.token = token
    },
    setUser(user) {
      this.user = user
    },
    setAddresses(addresses) {
      this.addresses = addresses
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