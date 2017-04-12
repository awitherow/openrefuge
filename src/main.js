import Vue from 'vue'
import App from './App'
import router from './router'
import VueI18n from 'vue-i18n'
import locales from './locales'
import * as VueGoogleMaps from 'vue2-google-maps'

let GOOGLE_MAPS_TOKEN = ''
if (process.env.NODE_ENV === 'development') {
  const keys = require('./config/keys.json')
  GOOGLE_MAPS_TOKEN = keys.GOOGLE_MAPS_TOKEN
} else {
  GOOGLE_MAPS_TOKEN = process.env.GOOGLE_MAPS_TOKEN
  console.log(process.env)
}

Vue.use(VueGoogleMaps, {
  installComponents: true,
  load: {
    key: GOOGLE_MAPS_TOKEN
  }
})

Vue.use(VueI18n)

Vue.config.lang = 'en'

Object.keys(locales).forEach(lang => Vue.locale(lang, locales[lang]))

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
