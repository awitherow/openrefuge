<template>
  <div id="app">
    <site-header></site-header>
    <transition name="slideUpOut fade">
      <div class="alert" v-if="mailPromptVisible">
        <mail-chimp :toggle="toggleMailPrompt"></mail-chimp>
      </div>
    </transition>
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import SiteHeader from './components/SiteHeader'
import MailChimp from './components/MailChimp'
export default {
  name: 'app',
  components: {
    'site-header': SiteHeader,
    'mail-chimp': MailChimp,
  },
  data: function () {
    return {
      mailPromptVisible: true,
    }
  },
  methods: {
    toggleMailPrompt() {
      this.mailPromptVisible = !this.mailPromptVisible
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

@keyframes slideOutUp {
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, -100%, 0);
  }
}

.slideUpOut-leave-active {
  animation: slideOutUp 0.5s;
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
