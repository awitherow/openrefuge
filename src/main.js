import Vue from 'vue'
import App from './App'

import VueI18n from 'vue-i18n'

import locales from './locales'
import router from './router'

Vue.use(VueI18n)

if (process.env.APP_ENV === 'PROD') {
  const VueAnalytics = require('vue-ua')
  Vue.use(VueAnalytics, {
    appName: 'OpenRefuge', // Mandatory
    appVersion: '0.1', // Mandatory
    trackingId: 'UA-56817747-11', // Mandatory
    vueRouter: router,
    ignoredViews: ['homepage']
  })
}

Vue.config.lang = 'en'

Object.keys(locales).forEach(lang => Vue.locale(lang, locales[lang]))

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
