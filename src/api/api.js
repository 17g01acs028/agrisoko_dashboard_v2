import axios from 'axios'

const api = axios.create({
<<<<<<< HEAD
    baseURL: "https://agrisoko-backend.vercel.app"
||||||| parent of fa50de7 (latest)
    baseURL: 'https://agrisoko-backend.vercel.app/api'
=======
    baseURL: "/api"
>>>>>>> fa50de7 (latest)
})
export default api
