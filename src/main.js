import Vue from 'vue'
import App from './App'
import router from './router'
import VueI18n from 'vue-i18n'
import locales from './locales'
import * as VueGoogleMaps from 'vue2-google-maps'
import keys from './config/keys.json'

Vue.use(VueGoogleMaps, {
  installComponents: true,
  load: {
    // key will be gotten from config json keys file, which you can copy from the example.
    // on production, it will get the environment variable set on heroku!
    key: keys.GOOGLE_MAPS_TOKEN || process.env.GOOGLE_MAPS_TOKEN
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
