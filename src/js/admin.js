import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_API_BASE_URL_ADMIN}`,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
})

export default axiosInstance