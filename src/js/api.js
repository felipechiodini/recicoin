import axios from 'axios'
import { useUserStore } from '@/stores/user'
import router from '@/router'

const axiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_API_BASE_URL}`,
  withCredentials: true,
  withXSRFToken: true,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
})

axiosInstance.interceptors.request.use(config => {
  const user = new useUserStore()
  config.headers.Authorization = `Bearer ${user.token}`
  return config
})

axiosInstance.interceptors.response.use(null, (error) => {
  if (error?.response?.status === 401) {
    localStorage.removeItem('user')
    router.push({ name: 'login' })
  }
  return Promise.reject(error)
})

export default axiosInstance