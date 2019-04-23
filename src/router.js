import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import vuescrolltop from 'vue-scrollto'
import 'reset-css';

Vue.use(Router)
Vue.use(vuescrolltop)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        title: 'Portfolio / Home'
      }
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue'),
      meta: {
        title: 'Portfolio / About'
      }
    }
  ]
})

router.afterEach((to) => {
  if (to.meta && to.meta.title) {
    document.title = to.meta.title
  }
})

export default router
