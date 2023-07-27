import axios from 'axios'
const API_URL = 'http://localhost:8080/api';

class AuthService {
    login(admin) {
      return axios
      .post(API_URL + '/user/login', {
        email: admin.email,
        password: admin.password
      })
      .then(res => {
        console.log(res.data)
        console.log(res.data.token)
            if (res.statusText == 'OK') {
              const token = res.data.token
              const user = res.data.user.username
              const role = res.data.user.role
              localStorage.setItem('token',token)
              localStorage.setItem('user', JSON.stringify(user))
              localStorage.setItem('role', JSON.stringify(role))
            }
            return res.data;
      })
  }
  logout() {
    localStorage.removeItem("user")
    localStorage.removeItem("token")
    localStorage.removeItem("role")
  }

  register(admin) {
    return axios
      .post(API_URL + '/user/register', {
        username: admin.username,
        email: admin.email,
        password: admin.password,
        role: admin.role
      })
  }
}

export default new AuthService();
