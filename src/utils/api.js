import axios from 'axios'

let instance = axios.create({
  baseURL: 'http://jinhyuk.me:3333'
})

// instance.interceptors.request.use(config => {
//   let accessToken = localStorage.getItem('user.auth') ? JSON.parse(localStorage.getItem('user.auth')).access_token : ''
//   config.headers = {
//     'Authorization': `Bearer ${accessToken}`
//   }
//   // console.log(config)
//   return config
// }, error => {
//   return Promise.reject(error)
// })

export const $http = instance
