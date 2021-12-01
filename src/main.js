import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  methods: {
    // Nuestra función
    init () {
      console.log('Hola 🌝');
      store.dispatch('auth/getToken', null, { root: true })
    }
  },
  // Hook created
  created () {
    this.init()
  },

  render: h => h(App)
}).$mount('#app')
