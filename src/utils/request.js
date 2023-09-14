import axios from 'axios'
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

axios.defaults.withCredentials = true;

// create an axios instance
const service = axios.create({
  baseURL: "http://localhost:8080",
  timeout: 5000,
})

// request interceptor
service.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.common['token'] = token
    }
    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
   */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  response => {
    return response.data
  },
  error => {
    switch (error.response.status) {
      case 401:
        store.state.auth.admin = null
        store.state.auth.status.loggedIn = null
        localStorage.removeItem('token');
        localStorage.removeItem('userInfo');
        localStorage.removeItem('permissions');
        localStorage.removeItem('polyscan');
        location.href = '/#/login'
        break
      case 403:
        Swal.fire({
          title: 'Error',
          text: 'Permission denied',
          icon: 'error',
          showCancelButton: false,
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'OK',
        }).then((result) => {
          if (result.isConfirmed) {
            location.href = '/#/'
          }
        })
    }
    return Promise.reject(error.response)
  }
)

export default service
