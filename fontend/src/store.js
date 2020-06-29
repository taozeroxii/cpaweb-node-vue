import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null
  },
  mutations: {
    set_user: (state, user) => state.user = user
  },
  actions: {
    get_user_login: ({ commit }) => Axios.post('api/account/getUserLogin').then(res => commit('set_user', res.data))
  }
})
