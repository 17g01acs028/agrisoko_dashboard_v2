import axios from 'axios'

const api = axios.create({
    baseURL: 'https://agrisoko-backend.vercel.app/api'
})
export default api
