<template>
  <div id="app">
    <div class="background"></div>
    <site-header />
    <div class="alert">
      June 20th: World Refugee Day Fundraiser in Arlington, Virginia.
      <a class="button white" target="_blank" href="https://www.facebook.com/OpenRefugeOrg/">MORE INFO
        <img class="link-carat" :src="alertCarat" />
      </a>
    </div>
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import SiteHeader from './components/SiteHeader'
export default {
  name: 'app',
  components: {
    'site-header': SiteHeader,
  },
  data: function () {
    return {
      'alertCarat': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAADTUlEQVR4Xu2dwW0TQRiFXziDxBXEnQN3WqACeuBKBSRFcKISDogrEg1QABVQAdpgK2tnvZ5ZE9D835fzrJX33pc3k5mxfRV/0A5codUrPgIAh0AABADuAFy+DSAAcAfg8m0AAYA7AJdvAwgA3AG4fBtAAOAOwOXbAAIAdwAu3wYQALgDcPk2gADAHYDLtwEEAO4AXL4NIABwB+DybQABgDsAl28DCADcAbh8G0AA4A7A5dsAAgB3AC6/YgM8TfI2ySd4tk3yqwEwhf85yeskN0mum1wAD6oEwDz8faRCcAbuKgAshS8EDc1WAYC18IWgeAO0hC8EKxCM3AA94QvBCQhGBeBxki+71X7DTHcwxIXhzI5RAXiU5GOSd73p78YLwc6IUQGYfn0h2Ej//LGRARACAbh1wCa4AITRG2AvXQg2QlAFAJtAAJwOtjBQqQGcDjYQUBEAp4MOEKoCIASNEFQGQAgaIKgOgBCcgYAAgBCsQEABQAhOQEACQAgWIKABIARHEBABEIIZBFQAhGAHARkAIUj83kD6fQJ6A+APkATgbkGEvFQiAIf/FuEgEID7myMoCARgeYv0eZIfSZ40HKgdD/mV5FWSnxue/eePCMB9y58l+Zrk5YY0pvDfJPm24dn/8ogAHNqOCn+SLgB3AODCFwB4+ALwBwDkX/6effoUgA6f3gD48MkAGD74ONjwwRdCDP9ou4m0CDT8hb1GCgCGf2KjmQCA4a+cMlQHwPDPHDFVBsDwG84XqwJg+A3hV90IMvzG8CsCYPgd4VcDwPA7w68EgOFvCL8KAIa/MfwKABj+BeGPDoDhXxj+yABM9/W/U65u/4WcT77EyBtB03cCfug0Z7h7+536uoePDMAktgcCwy96HNwCgeEXPw5eg8DwIcfBSxAYPuw4eA6B4TcsCUdfBC5JnCB4P9q7dBuyepAhFQGYjHoxyvvzHyTVjhetCkCHBeyhAsDO388HgOcvAAJAdwCu3zWAAMAdgMu3AQQA7gBcvg0gAHAH4PJtAAGAOwCXbwMIANwBuHwbQADgDsDl2wACAHcALt8GEAC4A3D5NoAAwB2Ay7cBBADuAFy+DSAAcAfg8m0AAYA7AJdvAwgA3AG4fBsADsBvCkmfgXvDJRAAAAAASUVORK5CYII='
    }
  }
}
</script>

<style>
html {
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

.background {
  background: url(../static/help.jpg) no-repeat center center;
  background-size: cover;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
}

.background:after {
  background-image: linear-gradient(to bottom right, #fff, #fff);
  content: '';
  position: inherit;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  opacity: .9;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100vh;
  padding-top: 80px;
}

.alert {
  min-height: 65px;
  background: #f6682F;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  padding: 8px;
}

.alert .button {
  margin-left: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.link-carat {
  width: 24px;
  height: 24px;
}

.container {
  height: 100%;
  max-width: 900px;
  margin: 0 auto;
  padding: 0 15px;
}

.container--full {
  height: 100%;
  width: 100%;
  padding: 0 15px;
}

.container--centered {
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity .25s;
}

.fade-enter-active {
  transition-delay: .25s;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}

.button {
  border: 1px solid #444;
  padding: 8px;
  background: none;
  text-transform: uppercase;
  min-width: 100px;
  text-decoration: none;
  color: #444;
  font-size: 12px;
}

.button.green {
  border-color: #0C8300;
  background: #3fb618;
  color: white;
}

.button.white {
  border: none;
  background: white;
}
</style>
