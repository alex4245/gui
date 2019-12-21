import axios from 'axios'

// const jwt = require('express-jwt')

export const application = axios.create({
    baseURL: 'http://127.0.0.1:5000/'
})

application.interceptors.request.use((config) => {
    const token = localStorage.getItem('access_token')
    // console.log(jwt(token).exp)
    const c = config
    if (token) {
        c.headers.Authorization = `Bearer ${token}`
    }
    return c
}, (error) => {
    console.log(error)
    return Promise.reject(error)
})
