import axios from 'axios'

// const jwt = require('express-jwt')

export const application = axios.create({
    baseURL: 'http://127.0.0.1:5000/'
})

application.interceptors.request.use((config) => {
    const token = localStorage.getItem('access_token')
    // console.log(jwt(token).exp)
    const c = config
    console.log('See', token)
    if (token) {
        c.headers.Authorization = `Bearer ${token}`
    }
    return c
}, (error) => {
    alert('SSSS')
    console.log('SSSS', error)
    // application.post('token_refresh')
    return Promise.reject(error)
})
