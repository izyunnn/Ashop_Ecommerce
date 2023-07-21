import axios from 'axios';

const API_URL = process.env.ASHOP_API;

class AuthService {
  login() {
    const form = new FormData();
    form.append('username', account);
    form.append('password', password);
    return axios
      .post(API_URL + 'api/user/login', form)
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
      });
  }

  logout() {
    const token = localStorage.getItem('token')
    return axios
      .post(API_URL + '/user/logout', {}, {
        headers:{
          "token": token 
        }
    })
    .then(response => {
      if (response.data.result == "ok") {
        localStorage.removeItem('token');
        localStorage.removeItem('userInfo');
        localStorage.removeItem('permissions');
        localStorage.removeItem('polyscan');
      }
    });
  }

  register(username, email,password,role) {

    return axios
      .post(API_URL + '/register', form), {
        username,
        email,
        password,
        role
      }
  }
}

export default new AuthService();
