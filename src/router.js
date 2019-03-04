import VueRouter from 'vue-router'
import routes from './routes'
import qs from 'qs'

let router = new VueRouter(
  {
    routes: routes,
    mode: 'history',
    linkActiveClass: 'active',
    parseQuery: function (query) {
      return qs.parse(query)
    },
    stringifyQuery: function (query) {
      let result = qs.stringify(query)

      return result ? ('?' + result) : ''
    }
  }
)

router.beforeEach(
  (to, from, next) => {
    if (to.path !== '/login' && (localStorage.getItem('token') === null)) {
      next('/login')
      return
    }

    next()
  }
)

export default router
