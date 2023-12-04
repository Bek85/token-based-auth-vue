import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {
    async register({ commit }, credentials) {
      const { data } = await axios.post(
        'http://localhost:3000/register',
        credentials
      )
      console.log(data)
    }
  }
})
