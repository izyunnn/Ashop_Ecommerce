import axios from 'axios'
const API_URL = "http://localhost:8080/api"

class AuthService {
  login(admin) {
    const form = new FormData();
    form.append('email', admin.email);
    form.append('password', admin.password);
    return axios
      .post(API_URL + '/user/login', form)
      .then(response => {
        if (response.data.result == "ok") {
          const token = response.data.payload.userInfo.token
          const permissions = response.data.payload.routerRoleInfo
          const userInfo = response.data.payload.userInfo
          localStorage.setItem('token',token)
          localStorage.setItem('permissions', JSON.stringify(permissions))
          localStorage.setItem('userInfo', JSON.stringify(userInfo))
        }
        return response.data;
      })
  }
  logout() {
    localStorage.removeItem('admin');
  }

  register(admin) {
    return axios
      .post(API_URL + '/user/register', form), {
        username: admin.username,
        email: admin.email,
        password: admin.password,
        role: admin.role
      }
  }
}

export default new AuthService();
