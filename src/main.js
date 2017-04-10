import Vue from 'vue'
import VueI18n from 'vue-i18n'
import GMaps from 'vue2-google-maps'

import App from './App'
import router from './router'

import locales from './locales'

Vue.use(VueI18n)
Vue.use(GMaps, {
  load: {
    key: process.env.MAPS_API_TOKEN
  }
})
Vue.config.lang = 'en'

Object.keys(locales).forEach(lang => Vue.locale(lang, locales[lang]))

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
