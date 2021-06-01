import Cookies from 'js-cookie'

const state = () => ({
  token: null
})

const getters = {
  token: state => state.token,
  isAuthenticated: state => state.token != null
}

const actions = {
  async createAndLogin ({ commit }, authData) {
    let authUrl = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' + process.env.fbAPIKey
    if (!authData.isLogin) {
      authUrl = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + process.env.fbAPIKey
    }
    try {
      const data = await this.$axios.$post(authUrl, authData.user)
      commit('setToken', data.idToken)
      localStorage.setItem('token', data.idToken)
      localStorage.setItem('tokenExpiration', new Date().getTime() + +data.expiresIn * 1000)
      Cookies.set('jwt', data.idToken)
      Cookies.set('tokenExpiration', new Date().getTime() + +data.expiresIn * 1000)
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error)
    }
  },
  initAuth ({ commit, dispatch }, req) {
    let token, tokenExpiration
    if (req) {
      if (!req.headers.cookie) {
        return
      }
      const jwtCookie = req.headers.cookie.split(';').find(c => c.trim().startsWith('jwt='))
      if (!jwtCookie) {
        return
      }
      token = jwtCookie.split('=')[1]
      tokenExpiration = req.headers.cookie.split(';').find(c => c.trim().startsWith('tokenExpiration=')).split('=')[1]
    } else {
      token = localStorage.getItem('token')
      tokenExpiration = localStorage.getItem('tokenExpiration')
    }
    if (new Date().getTime() > +tokenExpiration || !token) {
      dispatch('logout')
      return
    }
    commit('setToken', token)
  },
  logout ({ commit }) {
    commit('clearToken')
    Cookies.remove('jwt')
    Cookies.remove('tokenExpiration')
    if (process.client) {
      localStorage.removeItem('token')
      localStorage.removeItem('tokenExpiration')
    }
  }
}

const mutations = {
  setToken: (state, token) => { state.token = token },
  clearToken: (state) => { state.token = null }
}

export default {
  state,
  getters,
  actions,
  mutations
}
