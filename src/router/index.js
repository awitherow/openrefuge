import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: require('components/views/Hello')
    },
    {
      path: '/refugees',
      name: 'Refugees',
      component: require('components/views/Refugees')
    },
    {
      path: '/about',
      name: 'About',
      component: require('components/views/About')
    },
    {
      path: '/contact',
      name: 'Contact',
      component: require('components/views/Contact')
    }
  ]
})
