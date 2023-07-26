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
              localStorage.setItem('token',token)
              localStorage.setItem('user', JSON.stringify(user))
            }
            return response.data;
      })
  }
  logout() {
    localStorage.removeItem("user")
    localStorage.removeItem("token")
  }

  register(admin) {
    return axios
      .post('http://localhost8080/api/user/register', {
        username: admin.username,
        email: admin.email,
        password: admin.password,
        role: admin.role
      })
  }
}

export default new AuthService();
