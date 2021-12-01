import Vue from 'vue'
import Vuex from 'vuex'

// Importar oauth
import auth from './modules/auth'

Vue.use(Vuex)

export default new Vuex.Store({

  modules: {
    auth
  }
})
