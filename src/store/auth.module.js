import AuthService from '../services/auth.service'

const admin = localStorage.getItem('token')
const initialState = admin
                     ? { status: { loggedIn: true }, admin }
                     : { status: { loggedIn: false }, admin: null }

export const auth = {
  namespaced: true,
  state: initialState,
  actions: {
    login({ commit }, admin) {
      return AuthService.login(admin).then(
        admin => {
          commit('loginSuccess', admin)
          return Promise.resolve(admin)
        },
        error => {
          commit('loginFailure')
          return Promise.reject(error)
        }
      )
    },
    logout({ commit }) {
      AuthService.logout()
      commit('logout')
    },
  },
  mutations: {
    loginSuccess(state, admin) {
      state.status.loggedIn = true
      state.admin = admin
    },
    loginFailure(state) {
      state.status.loggedIn = false
      state.admin = null
    },
    logout(state) {
      state.status.loggedIn = false
      state.admin = null
    }
  }
}
