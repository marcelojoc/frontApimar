import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routerOptions = [
  { path: '/', name: 'Home', meta: { showBreadcrumb: true } },
  { path: '/search/:item', name: 'Profile', meta: { showBreadcrumb: true } },
  { path: '/hero/:heroId', name: 'Hero', meta: { showBreadcrumb: true } },
  { path: '/about', name: 'About' },
  { path: '/error', name: 'Error' },
  { path: '*', redirect: { name: 'Home' } }
]


// Rutas
const routes = routerOptions.map(r => {
  return {
    ...r,
    component: () => import(`@/views/${r.name}/Index.vue`)
  }
})

const router = new Router({
  routes
})

export default router
