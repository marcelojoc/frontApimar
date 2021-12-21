import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './plugins/BootstrapVue' // este  es un archivo para  importar los plugins externos , ejemplo  boootstrap vue

import './css/style.css';
import './assets/css/main.css';
Vue.config.productionTip = false

new Vue({
  router,
  store,
  methods: {
    // Nuestra función
    init () {
      store.dispatch('auth/getToken', null, { root: true })
    }
  },
  // Hook created
  created () {
    console.log(process.env.VUE_APP_ENVIROMENT)
    console.log(process.env.VUE_APP_LINK)
    console.log(process.env.VUE_APP_KEY)
    this.init()
  },

  render: h => h(App)
}).$mount('#app')
