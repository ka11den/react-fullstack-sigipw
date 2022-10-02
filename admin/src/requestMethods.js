import axios from 'axios'

const BASE_URL = 'http://localhost:8800/api/'

const user = JSON.parse(localStorage.getItem('persist:root'))?.user
const TOKEN = user && JSON.parse(user)?.currentUser?.accessToken
console.log('token: ', TOKEN)
export const publicRequest = axios.create({
    baseURL: BASE_URL,
})

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers:{token:`Bearer ${TOKEN}`}
})