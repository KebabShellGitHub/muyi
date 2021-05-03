import axios from "axios"

export const http = axios.create()

http.interceptors.response.use(res => res.data)