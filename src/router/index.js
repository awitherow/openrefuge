import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'hello',
      component: require('components/views/Hello')
    },
    {
      path: '/find-help',
      name: 'find-help',
      component: require('components/views/Find')
    },
    {
      path: '/take-action',
      name: 'take-action',
      component: require('components/views/Action')
    },
    {
      path: '/about',
      name: 'About',
      component: require('components/views/About')
    }
  ]
})
