import axios from "axios"

const api = axios.create({
    baseURL: "http://localhost:5000/api/users",
    withCredentials: true
})

api.interceptors.response.use((response) => response, async (error) => {
    const originalRequest = error.config

    if(error.response?.status === 401 &&)
})