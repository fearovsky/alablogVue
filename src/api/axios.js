import axios from 'axios'

const baseURL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000'
const version = import.meta.env.VITE_API_VERSION || 'v1'

const api = axios.create({
  baseURL: `${baseURL}/api/${version}`,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
})

export default api
