import axios from 'axios'
import { useUserStore } from '@/stores/user'
import router from '@/router'

const axiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_API_BASE_URL}`,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  }
})

// axiosInstance.interceptors.request.use(request => {
//   const userStore = useUserStore()

//   if (userStore.token) {
//     request.headers.Authorization = 'Bearer ' + userStore.token
//   }

//   return request
// }, (error) => Promise.reject(error))

// axiosInstance.interceptors.response.use(function (response) {
//   return response
// }, function (error) {
//   if (error.response.status === 401) {
//     localStorage.clear()
//     router.push({ name: 'auth.login' })
//   }

//   if (error.response.status === 503) {
//     router.push({ name: 'maintenance' })
//   }

//   return Promise.reject(error)
// })

export default axiosInstance