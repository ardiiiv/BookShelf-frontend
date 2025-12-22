/*
=======================================================
API Service
untuk mengatur:
- Base URL API
- Token Authorization (Bearer Token) lewat interceptor
- Error handling global (401, expired token)
=======================================================
*/



import axios from "axios";
import { storage } from "@/utils/storage";

const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3000/api"

const api = axios.create({
    baseURL: BASE_URL,
    timeout: 10000,
    withCredentials: true
})

// === Interceptor untuk Authorization token ===
api.interceptors.request.use(
    (config) => {
        const token = storage.get("token");
        if(token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
)

// === Interceptor response untuk handle error global ===
api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            storage.remove("token")
        }
        return Promise.reject(error)
    }
)

export default api;