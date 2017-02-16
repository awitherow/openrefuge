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
      component: require('components/views/Refugees/index.vue'),
      children: [
        {
          path: '',
          component: require('components/views/Refugees/home')
        },
        {
          path: 'local',
          component: require('components/views/Refugees/local')
        },
        {
          path: 'online',
          component: require('components/views/Refugees/online')
        },
        {
          path: 'help',
          component: require('components/views/Refugees/help')
        }
      ]
    },
    {
      path: '/about',
      name: 'About',
      component: require('components/views/About')
    }
  ]
})
